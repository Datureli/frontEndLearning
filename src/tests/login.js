const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function login() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://cranky-leakey-58c4cc.netlify.app/");

    driver.findElement(By.id("login")).click();

    await driver.sleep(2000);

    let clickLoginInput = await driver.findElement(By.id("input-68"));
    clickLoginInput.click()
    clickLoginInput.sendKeys("checkuser")

    await driver.sleep(2000);

    let clickPasswordInput = await driver.findElement(By.id("input-70"))
    clickPasswordInput.click()
    clickPasswordInput.sendKeys("pass1")
    
    await driver.sleep(2000);

   let loginIn = await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div[2]/div[2]/div[3]/button"))
   loginIn.click()

   await driver.sleep(2000);
   await driver.quit();
}
login()  