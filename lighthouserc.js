module.exports = {
  ci: {
    collect: {
      url: [
        // `https://${process.env.VERCEL_URL}`,
        'https://next-auth-app-eta.vercel.app'
      ],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
