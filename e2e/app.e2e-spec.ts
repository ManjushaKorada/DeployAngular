import { DeployAngularPage } from './app.po';

describe('deploy-angular App', () => {
  let page: DeployAngularPage;

  beforeEach(() => {
    page = new DeployAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
