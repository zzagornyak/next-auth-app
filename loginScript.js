const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${process.env.VERCEL_URL}${process.env.TEST_LOGIN_PATH}`);

  await page.type('#input-username-for-credentials-provider', process.env.TEST_USER);
  await page.type('#input-password-for-credentials-provider', process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForNavigation();
  await browser.close();
})();
