import { browser, by, element } from 'protractor';

const Eyes = require('eyes.selenium').Eyes;
const eyes = new Eyes();
eyes.setApiKey('GkWXyZXf4q0lWvmyWzrcwU1040XcESrWKFRK4ADMF3gCg110');

// obtain the ID from the environment variables - the name should be specified as null
const batchName =  null;
const batchId   = process.env.APPLITOOLS_BATCH_ID;

//  set the batch
eyes.setBatch(batchName, batchId, 0);

export class AppPage {
    navigateToButtons() {
        return browser.get('http://localhost:4200/buttons');
    }

    getParagraphText() {
        return element(by.css('app-buttons h2')).getText();
    }

    eyesOpen() {
        eyes.open(browser, '@sebgroup/botstrap', 'Buttons');
    }

    eyesScreenshot(name: string) {
        eyes.checkWindow(name);
    }

    eyesClose() {
        eyes.close();
    }

}
