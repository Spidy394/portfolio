/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: "Spidy394", // Update with your GitHub username
  apiUrl: "https://github-contributions-api.deno.dev",

  // Display settings
  title: "GitHub Activity",

  // Chart settings
  blockSize: 12,
  blockMargin: 4,
  fontSize: 11,
  maxLevel: 4,

  // Month labels
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  // Total count label template
  totalCountLabel: "{{count}} contributions in the last year",

  // Theme configuration for dark mode
  theme: {
    dark: [
      "rgba(17, 24, 39, 0.4)", // Very dark transparent (no contributions)
      "rgba(16, 185, 129, 0.3)", // Emerald - light
      "rgba(16, 185, 129, 0.5)", // Emerald - medium
      "rgba(16, 185, 129, 0.75)", // Emerald - bright
      "rgba(16, 185, 129, 1)", // Emerald - full
    ],
  },

  // Snake trail effect configuration
  snakeEffect: {
    color: "rgba(96, 165, 250, 0.8)", // Blue glow color
    glowRadius: 6, // Glow radius in pixels
    trailDuration: 1000, // How long the glow persists in milliseconds
    brightness: 1.3, // Brightness multiplier on hover
  },

  // Loading state configuration
  loadingState: {
    text: "Fetching contributions",
  },

  // Error state configuration
  errorState: {
    title: "Unable to load GitHub contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },
};
