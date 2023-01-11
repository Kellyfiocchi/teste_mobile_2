const {join} = require ('path')
const allure = require('allure-commandline')
const video =require('wdio-video-reporter');

exports.config = {
//hostname: 'localhost',
    //port: 4723,
   // path: '/wd/hub',
   'browserstack.user' : 'kellyfiochi_qfYJeF',
   'browserstack.key' : 'pLCkEkK2wP9M1svFtgrz',
 
  //services: ['appium'],
  services: ['browserstack'],

    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
       // "platformName": "android",
        //"appium:platformVersion": "8.0",
       // "appium:deviceName": "ebac-qe",
       // "appPackage": "com.woocommerce.android",
        //"appium:automationName": "UiAutomator2",
         "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        //"appActivity": "ui.main.MainActivity",
       // "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"

       'app' : 'bs://aafd4781c8bb887e8cbe559543f28d19fcdd0e0a',
       'device' : 'Samsung Galaxy S8',
       'os_version' : '7.0',
       'project' : 'Meu projeto em Device Farm',
       'build' : '1',
       'name': 'test_login'
      
        }],
        waitForTimeout: 20000,
        mochaOpts: {
            timeout: 300000
        },
        reporters: ['spec',
         ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],

            [video, {
              saveAllVideos: true,       // If true, also saves videos for successful test cases
              videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
            }],        
    
    ],
        onComplete: function() {
            const reportError = new Error('Could not generate Allure report')
            const generation = allure(['generate', 'allure-results', '--clean'])
            return new Promise((resolve, reject) => {
                const generationTimeout = setTimeout(
                    () => reject(reportError),
                    5000)
    
                generation.on('exit', function(exitCode) {
                    clearTimeout(generationTimeout)
    
                    if (exitCode !== 0) {
                        return reject(reportError)
                    }
    
                    console.log('Allure report successfully generated')
                    resolve()
                })
            })
        },
        afterStep: function (test, scenario, { error, duration, passed }) {
            if (error) {
                driver.takeScreenshot()
            }
        }
    }