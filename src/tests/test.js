const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let searchString = "Automation testing with Selenium and JavaScript";

  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

  let element = await driver.findElement(By.id("test"));
  element.click();

  await driver.sleep(3000);

  let tryCloseButton = await driver.findElement(By.id("closeButton"));
  tryCloseButton.click();

  await driver.sleep(3000);

  element.click();

  //It is always a safe practice to quit the browser after execution
  // await driver.quit();
}
example();
