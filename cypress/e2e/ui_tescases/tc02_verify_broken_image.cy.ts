import {ElementsPage} from "../../pages/elements_page_demoqa";



describe("TC02 - Verify broken image", function() {


    let elementsPage = new ElementsPage();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    it("TC02- Verify broken image", function() {

        elementsPage.clickOnElementsButtonOnHomeScreen();
        elementsPage.clickOnBrokenLinkImagesInMenuList();
        elementsPage.verifyBrokenImage();

    });

});
