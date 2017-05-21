import { LegendarySetupPage } from './app.po';

describe('legendary-setup App', () => {
  let page: LegendarySetupPage;

  beforeEach(() => {
    page = new LegendarySetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mpro works!');
  });
});
