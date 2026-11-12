class BaseTest {
    constructor(environment, browserName) {
        this.environment=environment;
        this.browserName=browserName;
    }

    baseSetup(){
        console.log(" Global environment setup: "+this.environment)
        console.log(" Base Test: "+this.browserName);
        
    } 
}

// Child Class 1: API Testing
class APIPage extends BaseTest{
    constructor(environment, browserName, apiEndpoint){
        super(environment, browserName)
        this.apiEndpoint=apiEndpoint;
    }

    apiSetup(){
        super.baseSetup();
        console.log("APIPage: Ready for API testing at " + this.apiEndpoint);
    }
}

// Child Class 2: UI Testing (inherits from the same BaseTest)
class UITest extends BaseTest {
    constructor(environment, browserName, appUrl) {
        super(environment, browserName);
        this.appUrl = appUrl;
    }

    uiSetup() {
        super.baseSetup(); // Calls parent's setup method
        console.log("UITest: Navigating UI to " + this.appUrl);
    }
}

// Create an API Test object
let apiTestRun = new APIPage("Staging", "Chrome", "https://api.testshop.com");
apiTestRun.apiSetup();

console.log("-----------------------------------------");

// Create a UI Test object (independent child)
let uiTestRun = new UITest("Production", "Firefox", "https://www.testshop.com");
uiTestRun.uiSetup();