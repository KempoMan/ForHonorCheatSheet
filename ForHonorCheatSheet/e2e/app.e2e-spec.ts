import { ForHonorCheatSheetPage } from './app.po';

describe('for-honor-cheat-sheet App', function() {
  let page: ForHonorCheatSheetPage;

  beforeEach(() => {
    page = new ForHonorCheatSheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
