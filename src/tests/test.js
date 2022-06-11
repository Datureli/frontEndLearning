const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  var searchString = "Automation testing with Selenium and JavaScript";

  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

  let element = await driver.findElement(By.id("test"));
  let check = element.click();
  await driver.sleep(3000);
  let autoCompleteItem = await driver.findElement(By.id('navi'));
autoCompleteItem.get(2).click()

  var title = await driver.getTitle();
  console.log("Title is:", title);

  //It is always a safe practice to quit the browser after execution
  // await driver.quit();
}
example();
