class BaseTest {
    constructor(browserName){
        this.browserName=browserName
    }
    parentSetup() {
        console.log("Base:"+ this.browserName+" browser will Open");
    }
}

class APIPage extends BaseTest {
    constructor(browserName) {
        super(browserName)
    }
    childSetup() {
        super.parentSetup();
        console.log(this.browserName+" browser is open");
    }
}


let browserTest=new APIPage("Chrome")
// browserTest.parentSetup();
 browserTest.childSetup();