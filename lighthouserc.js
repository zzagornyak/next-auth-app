module.exports = {
  ci: {
    collect: {
      url: [
        `https://${process.env.DEPLOYMENT_URL}`,
        // 'https://next-auth-app-eta.vercel.app'
      ],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
