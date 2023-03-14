import {InteractionsPage} from "../../pages/interactions_page_demoqa";



describe("TC06 - Verify User Can Drag and Drop", function() {


    let interactionsPage = new InteractionsPage();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    it("TC06 - Verify User Can Drag and Drop", function() {

        interactionsPage.clickOnInteractionsCategoryOnHomeScreen();
        interactionsPage.clickOnDroppableInMenuList();
        interactionsPage.dragAndDropAction();
        interactionsPage.verifyDragAndDropActionCompleted();
    });

});
