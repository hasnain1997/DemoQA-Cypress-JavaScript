import {ElementsPageSelectors} from "./selectors";
import {HomePage} from "./home_page_demoqa";


export class ElementsPage extends HomePage{

    elementsPageSelectors = new ElementsPageSelectors();

    /**
     * Click on Web Tables in Menu List
     */
    clickOnWebTablesInMenuList()
    {
        this.setDelay()
        this.verifyElementContainsTextThenClick(this.elementsPageSelectors.textOfRowInMenuList, this.strings.webTables)
    }

    /**
     * Click on Broken Link Images
     */
    clickOnBrokenLinkImagesInMenuList()
    {
        this.setDelay()
        this.verifyElementContainsTextThenClick(this.elementsPageSelectors.textOfRowInMenuList,
            this.strings.brokenLinkImages)
    }

    /**
     * Click on Web Tables in Menu List
     */
    clickOnAddButton()
    {
        this.setDelay()
        this.getElementAndClick(this.elementsPageSelectors.addButton)
    }

    /**
     * Verify recently Added User
     */
    verifyRecentlyAddedUser(data : any)
    {
        cy.get(this.elementsPageSelectors.entireTable)
            .find(this.elementsPageSelectors.editButton)
            .then((row) => {
                this.verifySpecificRowOfTable(row.length-1, data)
            });
    }

    /**
     * Verify Specific Row of Table
     */
    verifySpecificRowOfTable(rowNumber: number, data: any)
    {
        cy.get(this.elementsPageSelectors.entireRow)
            .eq(rowNumber).find(this.elementsPageSelectors.columnOfRow).then(tableColumn => {
            cy.wrap(tableColumn).eq(0).invoke('text').should('contain', data.firstName);
            cy.wrap(tableColumn).eq(1).invoke('text').should('contain', data.lastName);
            cy.wrap(tableColumn).eq(2).invoke('text').should('contain', data.age);
            cy.wrap(tableColumn).eq(3).invoke('text').should('contain', data.email);
            cy.wrap(tableColumn).eq(4).invoke('text').should('contain', data.salary);
            cy.wrap(tableColumn).eq(5).invoke('text').should('contain', data.department);
        })
    }

    /**
     * Click on Edit button of a Specific Row
     */
    clickOnEditButtonOfSpecificRow(rowNumber: number)
    {
        cy.get(this.elementsPageSelectors.entireTable)
            .find(this.elementsPageSelectors.editButton)
            .eq(rowNumber).click()
    }

    /**
     * Verify Broken Image
     */
    verifyBrokenImage()
    {
        cy.get(this.elementsPageSelectors.brokenImage)
            .should('be.visible')
            .and($img => {
                // @ts-ignore
                expect($img[0].naturalWidth).be.eq(0);
            })
    }
















}
