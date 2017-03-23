import { PerfumeHubWebPage } from './app.po';

describe('perfume-hub-web App', () => {
  let page: PerfumeHubWebPage;

  beforeEach(() => {
    page = new PerfumeHubWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ph works!');
  });
});
