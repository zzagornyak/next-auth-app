module.exports = {
  ci: {
    collect: {
      url: [
        process.env.DEPLOYMENT_URL,
      ],
      numberOfRuns: 1,
      settings: {
        extraHeaders: JSON.stringify({ "Cookie": process.env.COOKIES }),
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
