// Top-level base class handling core configuration

class GlobalConfig {
    constructor(environment) {
        this.environment=environment;
    }

    globalSetup(){
        console.log("Global Config: Environment is set to "+this.environment);
        
    }
}

class BaseTest extends GlobalConfig {
    constructor(environment, browserName) {
        // Passing environment from GlobalConfig with super
        super(environment);
        this.browserName=browserName;
    }

    BaseTestSetup(){
        // Calling the global method
        super.globalSetup();
        console.log("BaseTest: " + this.browserName + " browser will open");
        
    }
}

class APIPage extends BaseTest{
    constructor(environment, browserName) {
        super(environment, browserName);
    }

    childSetup(){
        super.BaseTestSetup();
        console.log("APIPage: " + this.browserName + " browser is open and ready for API testing");

    }
}

let mlTest=new APIPage("Stagging","Chrome")
mlTest.childSetup();