module.exports = {
  ci: {
    collect: {
      url: [process.env.DEPLOYMENT_URL],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
