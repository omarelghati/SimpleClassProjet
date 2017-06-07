import { AlaouiPage } from './app.po';

describe('alaoui App', function() {
  let page: AlaouiPage;

  beforeEach(() => {
    page = new AlaouiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
