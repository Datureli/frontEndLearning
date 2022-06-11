const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function checkNavigation() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

  let tryOpenNavigation = await driver.findElement(By.id("test"));
  tryOpenNavigation.click();

  await driver.sleep(3000);

  let tryCloseButton = await driver.findElement(By.id("closeButton"));
  tryCloseButton.click();

  await driver.sleep(3000);

  tryOpenNavigation.click();

  await driver.sleep(3000);

  driver.findElement(By.linkText("Pytania rekrutacyjne")).click();
  await driver.sleep(3000);
  tryOpenNavigation.click();
  await driver.sleep(3000);
  driver.findElement(By.linkText("Materiały")).click();
  await driver.sleep(3000);
  tryOpenNavigation.click();
  await driver.sleep(3000);
  driver.findElement(By.linkText("Angielski")).click();
  await driver.sleep(3000);
  tryOpenNavigation.click();
  await driver.sleep(3000);
  driver.findElement(By.linkText("Home")).click();

  await driver.sleep(3000);
  await driver.quit();
}
checkNavigation();
