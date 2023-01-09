const {join} = require ('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
            "platformName": "android",
            "platformVersion": "11.0",
            "deviceName": "ebac",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/loja-ebac.apk'),
            "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        }],
        waitForTimeout: 20000,
        mochaOpts: {
            timeout: 300000
        },
        reporters: ['spec']

}