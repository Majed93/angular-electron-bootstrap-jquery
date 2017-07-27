import { AngularElectronBootstrapJqueryPage } from './app.po';

describe('angular-electron-bootstrap-jquery App', () => {
  let page: AngularElectronBootstrapJqueryPage;

  beforeEach(() => {
    page = new AngularElectronBootstrapJqueryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
