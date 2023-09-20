module.exports = {
  ci: {
    collect: {
      puppeteerScript: './login-script.js',
      puppeteerLaunchOptions: {args: ['--allow-no-sandbox-job', '--allow-sandbox-debugging', '--no-sandbox', '--disable-gpu', '--disable-gpu-sandbox', '--display']},
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
          "categories:performance": ["error", {"minScore": 1}],
          "categories:accessibility": ["error", {"minScore": 1}],
          "categories:best-practices": ["error", {"minScore": 1}],
          "categories:seo": ["error", {"minScore": 1}]
      }
    },
  },
};
