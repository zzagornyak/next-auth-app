module.exports = {
  ci: {
    collect: {
      puppeteerScript: './puppeteerScript.js',
      numberOfRuns: 1,
      disableStorageReset: true,
      url: [
        process.env.DEPLOYMENT_URL,
      ],
      settings: {
        "disableStorageReset": true,
        "throttlingMethod": "devtools"
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      "assertions": {
          "categories:performance": ["error", {"minScore": 0.7}],
          "categories:accessibility": ["error", {"minScore": 0.7}],
          "categories:best-practices": ["error", {"minScore": 0.7}],
          "categories:seo": ["error", {"minScore": 0.7}]
      }
    },
  },
};
