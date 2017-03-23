import { browser, element, by } from 'protractor';

export class PerfumeHubWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ph-root h1')).getText();
  }
}
