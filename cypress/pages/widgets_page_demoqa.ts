import {WidgetsPageSelectors} from "./selectors";
import {HomePage} from "./home_page_demoqa";


export class WidgetsPage extends HomePage {

    widgetsPageSelectors = new WidgetsPageSelectors();

    /**
     * Click on Progress Bar
     */
    clickOnProgressBarInMenuList()
    {
        this.verifyElementContainsTextThenClick(this.widgetsPageSelectors.textOfRowInMenuList,
            this.strings.progressBar)
    }

    /**
     * Click on Start ProgressBar Button
     */
    clickOnStartProgressBar()
    {

        this.getElementAndClick(this.widgetsPageSelectors.startButton);
        this.setDelay(13000)
    }

    /**
     * Verify Progress bar color
     */

    verifyProgressBarColor()
    {

        cy.get(this.widgetsPageSelectors.resetButton).contains("Reset")
            .then(()=>{
                    cy.get(this.widgetsPageSelectors.progressBar)
                        .should(
                            "have.css",
                            "background-color",
                            this.strings.greenColorRgb
                        );
            });
    }

    /**
     * Click on Tool Tip
     */
    clickOnToolTipsInMenuList()
    {
        this.verifyElementContainsTextThenClick(this.widgetsPageSelectors.textOfRowInMenuList,
            this.strings.toolTips)
    }

    /**
     * Hover On Button
     */
    hoverOnButtonAndVerifyPopup()
    {
        this.getElement(this.widgetsPageSelectors.toolTipButton).trigger("mouseover");
        this.getElement(this.widgetsPageSelectors.toolTipPopup)
            .should('be.visible')
            .should('have.text', this.strings.toolTipTestOnHover)
    }
}
