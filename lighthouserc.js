module.exports = {
  ci: {
    collect: {
      puppeteerScript: './puppeteerScript.js',
      puppeteerLaunchOptions: {args: ['--allow-no-sandbox-job', '--allow-sandbox-debugging', '--no-sandbox', '--disable-gpu', '--disable-gpu-sandbox', '--display']},
      numberOfRuns: 1,
      disableStorageReset: true,
      url: [
        process.env.DEPLOYMENT_URL,
      ],
      settings: {
        "skipAudits": ["redirects-http"],
        "disableStorageReset": true,
        "maxWaitForLoad": 60000,
        "throttlingMethod": "devtools"
      }
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
