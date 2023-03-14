import {FormsPage} from "../../pages/forms_page_demoqa";
import {PracticeForm} from "../../pages/practice_form";


describe("TC03 - Verify user can submit the form", function() {


    let formsPage = new FormsPage();
    let practiceForm = new PracticeForm();

    before(() =>
    {
        cy.visit(Cypress.env('baseUrl'));
        console.log('Done')
    })

    beforeEach(() =>
    {
        cy.fixture('practiceFormInputData.json').as('practiceFormJson');
        cy.fixture('resultRequiredFromPracticeForm.json').as('resultJson');
        console.log('Done')
    })

    it("TC03 - Verify user can submit the form", function() {

        formsPage.clickOnFormsButtonOnHomeScreen();
        formsPage.clickOnPracticeFormInMenuList();
        practiceForm.enterFirstName(this.practiceFormJson.firstName);
        practiceForm.enterLastName(this.practiceFormJson.lastName);
        practiceForm.enterEmail(this.practiceFormJson.email);
        practiceForm.selectGender(this.practiceFormJson.gender);
        practiceForm.enterMobileNumber(this.practiceFormJson.mobileNumber);
        practiceForm.enterDob(this.practiceFormJson.dob);
        practiceForm.enterSubject(this.practiceFormJson.subject);
        practiceForm.selectHobbies(this.practiceFormJson.hobbies);
        practiceForm.enterCurrentAddress(this.practiceFormJson.address);
        practiceForm.selectState(this.practiceFormJson.state);
        practiceForm.selectCity(this.practiceFormJson.city);
        practiceForm.uploadImageOnPracticeForm();
        practiceForm.submitButton();
        formsPage.verifyFormData(this.resultJson);



    });


});
