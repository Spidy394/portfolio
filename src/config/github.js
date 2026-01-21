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
  subtitle: "coding journey over the past year",

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

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ["", "M", "", "W", "", "F", ""],

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
    light: [
      "rgb(235, 237, 240)", // Light gray
      "rgb(155, 233, 168)", // Light green
      "rgb(64, 196, 99)", // Medium green
      "rgb(48, 161, 78)", // Dark green
      "rgb(33, 110, 57)", // Very dark green
    ],
  },

  // Error state configuration
  errorState: {
    title: "Unable to load GitHub contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },

  // Loading state configuration
  loadingState: {
    title: "Loading contributions...",
    description: "Fetching your GitHub activity data",
  },
};
