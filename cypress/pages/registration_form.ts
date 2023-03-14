import {HomePageSelectors, UserRegistrationFormSelectors} from "./selectors";
import {ElementsPage} from "./elements_page_demoqa";


export class UserRegistration extends ElementsPage{

    userRegistrationFormSelectors = new UserRegistrationFormSelectors()

    /**
     * Type and Verify First Name
     */
    enterFirstName(firstName : string)
    {
        this.typeAndVerify(this.userRegistrationFormSelectors.firstName, firstName)
    }

    /**
     * Type and Verify Last Name
     */
    enterLastName(lastName : string)
    {
        this.typeAndVerify(this.userRegistrationFormSelectors.lastName, lastName)
    }

    /**
     * Type and Verify Email
     */
    enterEmail(email : string)
    {

        this.typeAndVerify(this.userRegistrationFormSelectors.email, email)
    }

    /**
     * Type and Verify Age
     */
    enterAge(age : string)
    {

        this.typeAndVerify(this.userRegistrationFormSelectors.age, age)
    }

    /**
     * Type and Verify Salary
     */
    enterSalary(salary : string)
    {

        this.typeAndVerify(this.userRegistrationFormSelectors.salary, salary)
    }

    /**
     * Type and Verify Department
     */
    enterDepartment(department : string)
    {

        this.typeAndVerify(this.userRegistrationFormSelectors.department, department)
    }

    /**
     * Click on Submit on Registration Form
     */
    clickOnSubmitButton()
    {
        this.getElementAndClick(this.userRegistrationFormSelectors.submitButton)
    }
}
