import { ProlistPage } from './app.po';

describe('prolist App', () => {
  let page: ProlistPage;

  beforeEach(() => {
    page = new ProlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
