
class base_Page {
  moveToElement(elementLocator) {
        browser.moveToObject(elementLocator,5,5);
  }

  takeScreenshot(testName, capabilities){
        browser.saveScreenshot( "./screenshots/"+testName+"-"+capabilities+".png");
  }
}

module.exports = new base_Page();
