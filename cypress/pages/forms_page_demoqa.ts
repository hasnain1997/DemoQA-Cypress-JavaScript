import {FormsPageSelectors} from "./selectors";
import {HomePage} from "./home_page_demoqa";
import JSON = Mocha.reporters.JSON;


export class FormsPage extends HomePage{

    formsPageSelectors = new FormsPageSelectors();

    /**
     * Click on Practice Form in Menu List
     */
    clickOnPracticeFormInMenuList()
    {
        this.setDelay()
        this.verifyElementContainsTextThenClick(this.formsPageSelectors.textOfRowInMenuList, this.strings.practiceForm)
    }

    /**
     * Click on Broken Link Images
     */
    clickOnBrokenLinkImagesInMenuList()
    {
        this.setDelay()
        this.verifyElementContainsTextThenClick(this.formsPageSelectors.textOfRowInMenuList,
            this.strings.brokenLinkImages)
    }

    /**
     * Verify FormData
     */
    verifyFormData( data: any)
    {
        cy.get(this.formsPageSelectors.tableBody)
            .find(this.formsPageSelectors.tableRow).then(tableColumn => {
            cy.wrap(tableColumn).eq(1).invoke('text').should('contain', data.fullName);
            cy.wrap(tableColumn).eq(3).invoke('text').should('contain', data.email);
            cy.wrap(tableColumn).eq(5).invoke('text').should('contain', data.gender);
            cy.wrap(tableColumn).eq(7).invoke('text').should('contain', data.mobileNumber);
            cy.wrap(tableColumn).eq(9).invoke('text').should('contain', data.dob);
            cy.wrap(tableColumn).eq(11).invoke('text').should('contain', data.subject);
            cy.wrap(tableColumn).eq(13).invoke('text').should('contain', data.hobbies);
            cy.wrap(tableColumn).eq(15).invoke('text').should('contain', data.picture);
            cy.wrap(tableColumn).eq(17).invoke('text').should('contain', data.address);
            cy.wrap(tableColumn).eq(19).invoke('text').should('contain', data.stateAndCity);

        })
    }
}
