const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  var searchString = "Automation testing with Selenium and JavaScript";

  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

  //To send a search query by passing the value in searchString.
  let element = await driver.findElement(By.id('test'))
  element.click()
  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log("Title is:", title);

  //It is always a safe practice to quit the browser after execution
 // await driver.quit();
}
example();
