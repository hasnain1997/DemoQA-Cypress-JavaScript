import {PracticeFormSelectors} from "./selectors";
import {UserRegistration} from "./registration_form";

export class PracticeForm extends UserRegistration{

    practiceFormSelectors = new PracticeFormSelectors()

    /**
     * Type and Verify Mobile Number
     */
    enterMobileNumber(mobileNumber : string)
    {
        this.typeAndVerify(this.practiceFormSelectors.mobileNumber, mobileNumber)
    }

    /**
     * Type and Verify DOB
     */
    enterDob(dob : string)
    {
        cy.get(this.practiceFormSelectors.dob)
            .type('{selectall}')
            .type(dob)
            .type('{esc}')
    }

    /**
     * Type and Verify Subject
     */
    enterSubject(subject : string)
    {
        this.enterText(this.practiceFormSelectors.subject, subject)
    }

    /**
     * Type and Current Address
     */
    enterCurrentAddress(currentAddress : string)
    {
        this.typeAndVerify(this.practiceFormSelectors.address, currentAddress)
    }

    /**
     * Upload Image
     */
    uploadImageOnPracticeForm() {
        const filePath = "download.png";
        this.uploadImage(this.practiceFormSelectors.uploadImage, filePath);
        this.setDelay(10000);
    }

    /**
     * Select Gender
     */
    selectGender(gender: string) {
        this.getElement(this.practiceFormSelectors.gender).check(gender, {force: true})
    }


    /**
     * Select Hobbies
     */
    selectHobbies(hobbies: string) {
        this.getElement(this.practiceFormSelectors.hobbies).check(hobbies,  {force: true})
    }

    /**
     * Select State
     */
    selectState(value: string) {
        this.selectElement(this.practiceFormSelectors.state, this.practiceFormSelectors.stateDropdown, value)
    }

    /**
     * Select City
     */
    selectCity(value: string) {
        this.selectElement(this.practiceFormSelectors.city, this.practiceFormSelectors.cityDropdown, value)
    }

    /**
     * Click on Submit Button
     */
    submitButton() {
        this.getElementAndClick(this.practiceFormSelectors.submitButton)
    }
}
