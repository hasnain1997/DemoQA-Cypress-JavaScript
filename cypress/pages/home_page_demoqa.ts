import { HomePageSelectors } from "./selectors";
import { BasePage } from "./base_page";

export class HomePage extends BasePage{

    homeSelectors = new HomePageSelectors()

    /**
     * click Element Category Card on Demo qa Home Screen
     */
    clickOnElementsButtonOnHomeScreen(){
        this.verifyElementContainsTextThenClick(this.homeSelectors.categoryCard, this.strings.elements)
    }

    /**
     * click Forms Category Card on Demo qa Home Screen
     */
    clickOnFormsButtonOnHomeScreen(){
        this.verifyElementContainsTextThenClick(this.homeSelectors.categoryCard, this.strings.forms)
    }

    /**
     * click Widgets Category Card on Demo qa Home Screen
     */
    clickOnWidgetButtonOnHomeScreen(){
        this.verifyElementContainsTextThenClick(this.homeSelectors.categoryCard, this.strings.widgets)
    }

    /**
     * click Interactions Category Card on Demo qa Home Screen
     */
    clickOnInteractionsCategoryOnHomeScreen(){
        this.verifyElementContainsTextThenClick(this.homeSelectors.categoryCard, this.strings.interactions)
    }
}
