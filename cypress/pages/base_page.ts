import { Strings } from '../globals/strings'
import 'cypress-file-upload'


export class BasePage {

    strings = new Strings();

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value: number = 2000) {
        cy.wait(value);
    }

    /**
     * get element
     * @param selector - WebElement
     */

    getElement(selector: any) {
        return cy.get(selector)
    }

    /**
     * select element
     * @param parentSelector - WebElement
     * @param childSelector
     * @param value
     */

    selectElement(parentSelector: any,childSelector: any, value: any) {

        this.getElement(parentSelector).click()
        this.getElement(childSelector).contains(value).click({force: true});

    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector: any) {
        return cy.get(selector, { timeout:10000 }).click({force:true})
    }

    /**
     * type in input field
     * @param selector - selector for input field
     * @param text - string to type
     */
    enterText(selector: any, text: string){
        cy.get(selector).type(text);
    }

    /**
     * verify element contains text
     */
    verifyElementContainsTextThenClick(element : string,text : string){
        cy.get(element).contains(text).click()
    }

    /**
     * type and verify text
     * @param elementID - element of text
     * @param text - text to verify
     */
    typeAndVerify(elementID: string, text: any): void {
        let element = cy.get(elementID);
        element.click();
        element.clear();
        element.type(text);
        element.should("have.value", text);
    }

    /**
     * upload image on drag and drop area
     * @param element - element to attach file
     * @param filePath - path of file to uplaod
     */
    uploadImage(element: any, filePath: string) {
        cy.get(element).attachFile(filePath, {
            subjectType: "drag-n-drop",
        });
    }
}
