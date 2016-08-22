import { BeginnersAppPage } from './app.po';

describe('beginners-app App', function() {
  let page: BeginnersAppPage;

  beforeEach(() => {
    page = new BeginnersAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
