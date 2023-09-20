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
        "disableStorageReset": true,
        "maxWaitForLoad": 60000,
        "throttlingMethod": "devtools",
        "chromeFlags": ["--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage"]
      }
    },
    healthCheck: {
      fatal: true
    },
    upload: {
      target: 'temporary-public-storage',
      failOnUploadFailure: true,
      ignoreDuplicateBuildFailure: true,
    },
    assert: {
      "assertions": {
          "categories:performance": ["warn", {"minScore": 0.8}],
          "categories:accessibility": ["warn", {"minScore": 0.8}],
          "categories:best-practices": ["error", {"minScore": 0.8}],
          "categories:seo": ["warn", {"minScore": 0.8}]
      }
    },
  },
};
