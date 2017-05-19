
class base_Page {
  function moveToElement(elementLocator) {
        browser.moveToObject(elementLocator,5,5);
  }

  function takeScreenshot(testName, capabilities){
        browser.saveScreenshot( "./screenshots/"+testName+"-"+capabilities+".png");
  }
}

module.exports = new base_Page();
