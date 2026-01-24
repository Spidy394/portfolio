import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "motion/react";
import { githubConfig } from "../config/github";

// Helper function to filter contributions to past year
function filterLastYear(contributions) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo && itemDate <= today;
  });
}

export default function GithubContributions() {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [blockSize, setBlockSize] = useState(12);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [glowingBoxes, setGlowingBoxes] = useState(new Set());
  const scrollContainerRef = useRef(null);
  const componentRef = useRef(null);
  const timeoutsRef = useRef({});

  // Defer loading until component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Responsive block size based on screen width
  useEffect(() => {
    const updateBlockSize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(8);
      } else if (window.innerWidth < 1024) {
        setBlockSize(10);
      } else {
        setBlockSize(12);
      }
    };

    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  // Auto-scroll to rightmost (today's date)
  useEffect(() => {
    if (!isLoading && contributions.length > 0 && scrollContainerRef.current) {
      // Multiple attempts to ensure scroll happens after render
      const scrollToEnd = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft =
            scrollContainerRef.current.scrollWidth;
        }
      };

      // Immediate scroll
      scrollToEnd();

      // Delayed scrolls to ensure calendar is fully rendered
      const timeout1 = setTimeout(scrollToEnd, 100);
      const timeout2 = setTimeout(scrollToEnd, 300);
      const timeout3 = setTimeout(scrollToEnd, 500);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [isLoading, contributions]);

  // Enable horizontal scroll with mouse wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Only handle horizontal scrolling if there's overflow
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [contributions]);

  useEffect(() => {
    if (!shouldLoad) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        // Add timestamp to prevent caching
        const timestamp = new Date().getTime();
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json?t=${timestamp}`
        );
        const data = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          // Flatten the nested array structure
          const flattenedContributions = data.contributions.flat();

          // Convert contribution levels to numbers
          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          // Transform to the expected format
          const validContributions = flattenedContributions
            .filter(
              (item) =>
                typeof item === "object" &&
                item !== null &&
                "date" in item &&
                "contributionCount" in item &&
                "contributionLevel" in item
            )
            .map((item) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: contributionLevelMap[item.contributionLevel] || 0,
            }));

          if (validContributions.length > 0) {
            // Filter to show only the past year
            const filteredContributions = filterLastYear(validContributions);

            // Calculate total contributions from filtered data (last year only)
            const total = filteredContributions.reduce(
              (sum, item) => sum + item.count,
              0
            );

            setContributions(filteredContributions);
            setTotalContributions(total);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [shouldLoad]);

  return (
    <div
      ref={componentRef}
      className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm"
    >
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-white mb-2">
          <FaGithub className="text-xl sm:text-2xl" />
          {githubConfig.title}
        </h3>
        {!isLoading && !hasError && totalContributions > 0 && (
          <p className="text-gray-400 text-xs sm:text-sm">
            Total:{" "}
            <span className="text-green-400 font-bold">
              {totalContributions.toLocaleString()}
            </span>{" "}
            contributions
          </p>
        )}
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          {/* Animated contribution grid pattern */}
          <div className="mb-6 relative">
            {/* Glowing effect behind icon */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-green-400/30 rounded-full" />
            </motion.div>

            {/* Animated GitHub icon */}
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGithub className="text-6xl sm:text-7xl text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Animated contribution squares */}
          <div className="flex gap-1.5 mb-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-sm"
                animate={{
                  backgroundColor: [
                    "rgba(34, 197, 94, 0.2)",
                    "rgba(34, 197, 94, 0.8)",
                    "rgba(34, 197, 94, 0.2)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.p
            className="text-green-400/80 text-sm sm:text-base font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {githubConfig.loadingState.text}
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ...
            </motion.span>
          </motion.p>
        </div>
      ) : hasError || contributions.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <div className="bg-gray-800/50 mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/10">
            <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
          </div>
          <p className="mb-2 font-semibold text-gray-300 text-sm sm:text-base">
            {githubConfig.errorState.title}
          </p>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500 px-4">
            {githubConfig.errorState.description}
          </p>
          <a
            href={`https://github.com/${githubConfig.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 hover:border-green-500/30 rounded-lg transition-all duration-300 text-gray-300 hover:text-white text-xs sm:text-sm"
          >
            <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
            {githubConfig.errorState.buttonText}
          </a>
        </div>
      ) : (
        <div className="relative">
          {/* Scrollable container with hidden scrollbar */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto smooth-scroll mb-3 sm:mb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
            }}
          >
            <style>{`
                .smooth-scroll::-webkit-scrollbar {
                  display: none;
                }
                .react-activity-calendar__count {
                  display: none !important;
                }
                .react-activity-calendar footer {
                  display: none !important;
                }
              `}</style>
            <div className="min-w-fit">
              <ActivityCalendar
                data={contributions}
                blockSize={blockSize}
                blockMargin={blockSize < 10 ? 3 : 4}
                fontSize={blockSize < 10 ? 10 : githubConfig.fontSize}
                colorScheme="dark"
                maxLevel={githubConfig.maxLevel}
                hideTotalCount={true}
                hideColorLegend={true}
                hideMonthLabels={false}
                showWeekdayLabels={false}
                theme={githubConfig.theme}
                labels={{
                  months: githubConfig.months,
                }}
                style={{
                  color: "rgb(156, 163, 175)",
                }}
                renderBlock={(block, activity) => {
                  const date = new Date(activity.date);
                  const month = githubConfig.months[date.getMonth()];
                  const day = date.getDate();
                  const contributionText =
                    activity.count === 1 ? "contribution" : "contributions";
                  const tooltipText = `${activity.count} ${contributionText} on ${month} ${day}`;
                  const boxId = activity.date;
                  const isGlowing = glowingBoxes.has(boxId);

                  const handleMouseEnter = () => {
                    // Clear any existing timeout for this box
                    if (timeoutsRef.current[boxId]) {
                      clearTimeout(timeoutsRef.current[boxId]);
                    }

                    // Add to glowing set
                    setGlowingBoxes((prev) => new Set(prev).add(boxId));
                  };

                  const handleMouseOver = () => {
                    // Trigger on mouse over to catch all movements
                    if (timeoutsRef.current[boxId]) {
                      clearTimeout(timeoutsRef.current[boxId]);
                    }
                    setGlowingBoxes((prev) => new Set(prev).add(boxId));
                  };

                  const handleMouseLeave = () => {
                    // Set timeout to remove glow after configured duration
                    timeoutsRef.current[boxId] = setTimeout(() => {
                      setGlowingBoxes((prev) => {
                        const newSet = new Set(prev);
                        newSet.delete(boxId);
                        return newSet;
                      });
                    }, githubConfig.snakeEffect.trailDuration);
                  };

                  return (
                    <motion.g
                      onMouseEnter={handleMouseEnter}
                      onMouseOver={handleMouseOver}
                      onMouseLeave={handleMouseLeave}
                      animate={{
                        y: isGlowing ? 2 : 0,
                        scale: isGlowing ? 0.95 : 1,
                        filter: isGlowing
                          ? `brightness(${githubConfig.snakeEffect.brightness}) drop-shadow(0 0 ${githubConfig.snakeEffect.glowRadius}px ${githubConfig.snakeEffect.color})`
                          : "brightness(1)",
                      }}
                      transition={{
                        duration: 0.15,
                        ease: "easeOut",
                      }}
                      style={{ cursor: "pointer", pointerEvents: "all" }}
                    >
                      {block}
                      <title>{tooltipText}</title>
                    </motion.g>
                  );
                }}
              />
            </div>
          </div>

          {/* Fixed legend outside scroll area */}
          <div className="flex items-center justify-end gap-1 sm:gap-2 text-xs text-gray-400">
            <span className="text-[10px] sm:text-xs">Less</span>
            <div className="flex gap-1">
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: "rgba(17, 24, 39, 0.4)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.3)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.5)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.75)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: "rgba(16, 185, 129, 1)" }}
              ></div>
            </div>
            <span className="text-[10px] sm:text-xs">More</span>
          </div>
        </div>
      )}
    </div>
  );
}
