exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'mocha',
    // Spec patterns are relative to the location of this config.
    specs: [
        'spec/*.spec.js'
    ],


    multiCapabilities: [{
        'browserName': 'chrome'
    }],


    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:3000',

    mochaOpts: {
        reporter: "spec",
        slow: 3000
    }
};
