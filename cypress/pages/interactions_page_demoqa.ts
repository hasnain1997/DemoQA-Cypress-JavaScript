import {InteractionsPageSelectors} from "./selectors";
import {HomePage} from "./home_page_demoqa";



export class InteractionsPage extends HomePage {

    interactionsPageSelectors = new InteractionsPageSelectors();

    /**
     * Click on Droppable
     */
    clickOnDroppableInMenuList()
    {
        this.verifyElementContainsTextThenClick(this.interactionsPageSelectors.textOfRowInMenuList,
            this.strings.droppable)
    }

    /**
     * Drag and Drop Action
     */
    dragAndDropAction()
    {

        this.getElement(this.interactionsPageSelectors.draggableBox)
            .drag(this.interactionsPageSelectors.droppableBox,{force: true})
        this.setDelay(9000)
    }

    /**
     * Verify Drag and Drop Action
     */
    verifyDragAndDropActionCompleted()
    {
        this.getElement(this.interactionsPageSelectors.droppableBox)
            .should(
            "have.css",
            "background-color",
            this.strings.blueColorRgb
        ).find(this.interactionsPageSelectors.droppedText).should('have.text', this.strings.dropped);
    }
}
