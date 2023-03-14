export class HomePageSelectors{
    readonly categoryCard = ".top-card";
}

export class ElementsPageSelectors{
    readonly textOfRowInMenuList = "span.text";
    readonly addButton = "#addNewRecordButton";
    readonly entireTable = ".rt-table";
    readonly editButton = "[title ='Edit']";
    readonly entireRow = ".rt-tr-group";
    readonly columnOfRow = ".rt-td";
    readonly brokenImage = "[src*='Toolsqa_1.jpg']";
}

export class UserRegistrationFormSelectors{
    readonly firstName = "#firstName";
    readonly lastName = "#lastName";
    readonly email = "#userEmail";
    readonly age = "#age";
    readonly salary = "#salary";
    readonly department = "#department";
    readonly submitButton = "#submit"
}

export class FormsPageSelectors{
    readonly textOfRowInMenuList = "span.text";
    readonly tableBody = "tbody";
    readonly tableRow = "tr td"
}

export class WidgetsPageSelectors{
    readonly textOfRowInMenuList = "span.text";
    readonly startButton = "#startStopButton";
    readonly resetButton = "#resetButton";
    readonly progressBar = "[role=progressbar]";
    readonly toolTipButton = "#toolTipButton";
    readonly toolTipPopup = ".tooltip-inner";
}

export class InteractionsPageSelectors{
    readonly textOfRowInMenuList = "span.text";
    readonly draggableBox = "#draggable";
    readonly droppableBox = "#droppable";
    readonly droppedText = "p";
}

export class PracticeFormSelectors{
    readonly firstName = "#firstName";
    readonly lastName = "#lastName";
    readonly email = "#userEmail";
    readonly gender = "[name=gender]";
    readonly mobileNumber = "#userNumber";
    readonly dob = "#dateOfBirthInput";
    readonly subject = "#subjectsContainer > div";
    readonly hobbies = "input[type*=checkbox]";
    readonly address = "#currentAddress";
    readonly uploadImage = "#uploadPicture";
    readonly state = "#state";
    readonly stateDropdown = "[id*='react-select-3']"
    readonly city = "#city";
    readonly cityDropdown = "[id*='react-select-4']"
    readonly submitButton = "#submit";

}

