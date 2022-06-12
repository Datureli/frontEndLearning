const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function login() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

    driver.findElement(By.id("Login")).click();
}
login()