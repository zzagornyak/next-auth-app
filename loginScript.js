const puppeteer = require('puppeteer');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log("Navigating to login page...");
  await page.goto('http://localhost:3000/api/auth/signin');
  
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

  console.log("Navigating to middleware page...");
  await page.goto('http://localhost:3000/middleware');
  // find h1 tag log its text
  const h1Text = await page.$eval('h1', el => el.textContent);
  console.log("H1 text:", h1Text);



  
  console.log("Closing browser...");
  await browser.close();
})();
