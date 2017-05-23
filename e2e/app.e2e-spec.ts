import { AngularPhonecatPage } from './app.po';

describe('angular-phonecat App', () => {
  let page: AngularPhonecatPage;

  beforeEach(() => {
    page = new AngularPhonecatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
