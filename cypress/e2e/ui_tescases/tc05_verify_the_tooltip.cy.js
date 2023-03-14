import {WidgetsPage} from "../../pages/widgets_page_demoqa";



describe("TC05 - Verify the tooltip", function() {


    let widgetsPage = new WidgetsPage();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    it("TC05 - Verify the tooltip", function() {

        widgetsPage.clickOnWidgetButtonOnHomeScreen();
        widgetsPage.clickOnToolTipsInMenuList();
        widgetsPage.hoverOnButtonAndVerifyPopup();
    });

});
