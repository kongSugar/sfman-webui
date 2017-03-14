import { WebprojectPage } from './app.po';

describe('webproject App', () => {
  let page: WebprojectPage;

  beforeEach(() => {
    page = new WebprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
