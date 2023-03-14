import {BookApi} from "../../pages/book_api";
import { Strings } from '../../globals/strings';

describe("TC02 - Add a List of Books", function() {


    let bookApi = new BookApi();
    let strings = new Strings();


    it("TC02- Positive Scenario", function() {

        bookApi.addBookToAUser(strings.validBookIsbn, strings.validUserName, strings.validPassword);
        bookApi.deleteUser();

    });

    it("TC02- Negative Scenario", function() {

        bookApi.addBookToAUserNegitiveScenerio(strings.invalidBookIsbn, strings.validUserName,
            strings.validPassword);
        bookApi.deleteUser();

    });

});
