import {WidgetsPage} from "../../pages/widgets_page_demoqa";



describe("TC04 - Verify the progress bar", function() {


    let widgetsPage = new WidgetsPage();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    it("TC04 - Verify the progress bar", function() {

        widgetsPage.clickOnWidgetButtonOnHomeScreen();
        widgetsPage.clickOnProgressBarInMenuList();
        widgetsPage.clickOnStartProgressBar();
        widgetsPage.verifyProgressBarColor()
    });

});
