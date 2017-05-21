import { browser, by, element } from 'protractor';

export class LegendarySetupPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mpro-root h1')).getText();
  }
}
