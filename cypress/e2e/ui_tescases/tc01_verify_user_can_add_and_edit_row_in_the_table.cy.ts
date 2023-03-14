import {ElementsPage} from "../../pages/elements_page_demoqa";
import {UserRegistration} from "../../pages/registration_form";



describe("TC01 - Verify User can Add and Edit row in the table", function() {


    let elementsPage = new ElementsPage();
    let userRegistration = new UserRegistration();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    beforeEach(() =>
    {
        cy.fixture('addUser.json').as('addUserJson');
        cy.fixture('editUser.json').as('editUserJson');
        console.log('Done')
    })

    it("TC01- Scenario A - Verify user can enter new data into the table", function() {

        elementsPage.clickOnElementsButtonOnHomeScreen();
        elementsPage.clickOnWebTablesInMenuList();
        elementsPage.clickOnAddButton();
        userRegistration.enterFirstName(this.addUserJson.firstName);
        userRegistration.enterLastName(this.addUserJson.lastName);
        userRegistration.enterEmail(this.addUserJson.email);
        userRegistration.enterAge(this.addUserJson.age);
        userRegistration.enterSalary(this.addUserJson.salary);
        userRegistration.enterDepartment(this.addUserJson.department);
        userRegistration.clickOnSubmitButton();
        elementsPage.verifyRecentlyAddedUser(this.addUserJson);

    });

    it("TC01- Scenario B - Verify user can edit the row in a table", function() {

        elementsPage.clickOnEditButtonOfSpecificRow(1);
        userRegistration.enterFirstName(this.editUserJson.firstName);
        userRegistration.enterLastName(this.editUserJson.lastName);
        userRegistration.clickOnSubmitButton();
        elementsPage.verifySpecificRowOfTable(1, this.editUserJson)
    });

});
