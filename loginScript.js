const puppeteer = require('puppeteer');

(async () => {
  console.log('DEPLOYMENT_URL', process.env.DEPLOYMENT_URL);
  console.log('TEST_LOGIN_PATH', process.env.TEST_LOGIN_PATH);
  console.log('TEST_USER', process.env.TEST_USER);
  console.log('TEST_PASSWORD', process.env.TEST_PASSWORD);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${process.env.DEPLOYMENT_URL}`);

  await page.waitForSelector('#input-username-for-credentials-provider');
  await page.type('#input-username-for-credentials-provider', process.env.TEST_USER);
  await page.type('#input-password-for-credentials-provider', process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForNavigation();
  await browser.close();
})();
