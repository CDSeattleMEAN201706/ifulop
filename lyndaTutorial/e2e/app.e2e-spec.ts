import { LyndaTutorialPage } from './app.po';

describe('lynda-tutorial App', () => {
  let page: LyndaTutorialPage;

  beforeEach(() => {
    page = new LyndaTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
