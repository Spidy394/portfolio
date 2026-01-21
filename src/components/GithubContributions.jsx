import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ActivityCalendar } from "react-activity-calendar";
import { githubConfig } from "../config/github";
import RevealOnScroll from "./RevealOnScroll";

// Helper function to filter contributions to past year
function filterLastYear(contributions) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

export default function GithubContributions() {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [blockSize, setBlockSize] = useState(12);
  const scrollContainerRef = useRef(null);

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

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [contributions]);

  useEffect(() => {
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
  }, []);

  return (
    <RevealOnScroll>
      <div className="mt-8 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] bg-gray-900/30 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2 text-white mb-2">
            <FaGithub className="text-2xl text-green-400" />
            {githubConfig.title}
          </h3>
          {!isLoading && !hasError && totalContributions > 0 && (
            <p className="text-gray-400 text-sm">
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
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-green-500/30 border-t-green-500"></div>
              <p className="text-gray-400 text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-800/50 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
              <FaGithub className="h-8 w-8 text-gray-400" />
            </div>
            <p className="mb-2 font-semibold text-gray-300">
              {githubConfig.errorState.title}
            </p>
            <p className="mb-4 text-sm text-gray-500">
              {githubConfig.errorState.description}
            </p>
            <a
              href={`https://github.com/${githubConfig.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 hover:border-green-500/30 rounded-lg transition-all duration-300 text-gray-300 hover:text-white text-sm"
            >
              <FaGithub className="h-4 w-4" />
              {githubConfig.errorState.buttonText}
            </a>
          </div>
        ) : (
          <div className="relative">
            {/* Scrollable container with hidden scrollbar */}
            <div
              ref={scrollContainerRef}
              className="w-full overflow-x-auto smooth-scroll mb-4"
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
                />
              </div>
            </div>

            {/* Fixed legend outside scroll area */}
            <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(17, 24, 39, 0.4)" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.5)" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.75)" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(16, 185, 129, 1)" }}
                ></div>
              </div>
              <span>More</span>
            </div>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}
