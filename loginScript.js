const puppeteer = require('puppeteer');

(async () => {
  console.log(process.env.DEPLOYMENT_URL);
  console.log(process.env.TEST_LOGIN_PATH);
  console.log(process.env.TEST_USER);
  console.log(process.env.TEST_PASSWORD);

  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log("Navigating to login page...");
  await page.goto(`${process.env.DEPLOYMENT_URL}${process.env.TEST_LOGIN_PATH}`);
  
  console.log("Waiting for username field...");
  await page.waitForSelector('#input-username-for-credentials-provider');
  
  await page.type('#input-username-for-credentials-provider', 'django');
  
  const username = await page.$eval('#input-username-for-credentials-provider', el => el.value);
  console.log("Username typed:", username);

  await page.type('#input-password-for-credentials-provider', 'password');

  const password = await page.$eval('#input-password-for-credentials-provider', el => el.value);
  console.log("Password typed:", password);
  
  console.log("Clicking submit button...");
await page.click('button[type="submit"]');
await page.waitForNavigation();

console.log("Getting cookies...");
const cookies = await page.cookies();
process.env.COOKIES = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

console.log("Cookies obtained:", process.env.COOKIES);

console.log("Closing browser...");
await browser.close();
})();
