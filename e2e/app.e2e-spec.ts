import { AssignPage } from './app.po';

describe('assign App', () => {
  let page: AssignPage;

  beforeEach(() => {
    page = new AssignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
