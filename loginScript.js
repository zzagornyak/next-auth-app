let counter = 1;

async function login(page) {
  await page.waitForTimeout(2000)

  console.log("Navigating to login page...");
  await page.goto(`${process.env.DEPLOYMENT_URL}${process.env.TEST_LOGIN_PATH}`);
  
  console.log("Waiting for username field...");
  await page.waitForSelector('#input-username-for-credentials-provider');
  
  await page.type('#input-username-for-credentials-provider', 'django');
  
  console.log("Clicking submit button...");
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  console.log("Getting cookies...");
  const cookies = await page.cookies();
  cookies.forEach(cookie => {
    console.log(cookie.name, cookie.value);
  });
}

async function setup(browser, context) {
  console.log(process.env.DEPLOYMENT_URL);
  console.log(process.env.TEST_LOGIN_PATH);
  console.log(process.env.TEST_USER);
  console.log(process.env.TEST_PASSWORD);

  console.log("Launching browser...");
  const page = await browser.newPage();
  await page.setCacheEnabled(true);
  
  if(counter === 1) {
    await login(page);
  } else {
    await page.goto(context.url);
  }

  await page.close();
  counter++;
};

module.exports = setup;