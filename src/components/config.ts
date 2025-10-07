export const config = {
  appUrl:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_APP_URL
      : "http://localhost:5173",
  social: {
    github: import.meta.env.VITE_GITHUB_URL,
    twitter: import.meta.env.VITE_TWITTER_URL,
  },
};
