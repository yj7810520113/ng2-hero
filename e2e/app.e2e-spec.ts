import { HelloHeroPage } from './app.po';

describe('hello-hero App', () => {
  let page: HelloHeroPage;

  beforeEach(() => {
    page = new HelloHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
