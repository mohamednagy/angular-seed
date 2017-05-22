import { AngularSeederPage } from './app.po';

describe('angular-seeder App', () => {
  let page: AngularSeederPage;

  beforeEach(() => {
    page = new AngularSeederPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
