import { AppPage } from './app.po';

describe('workspace-project App', () => {
    const page: AppPage = new AppPage();

    beforeAll(() => {
        page.eyesOpen();
    });

    afterAll(() => {
        page.eyesClose();
    });

    it('should open the buttons example page', () => {
        page.navigateToButtons();
    });

    it('should grab a screenshot of the buttons example', () => {
        page.eyesScreenshot('Buttons');
    });
});
