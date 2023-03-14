import {BookApi} from "../../pages/book_api";
import { Strings } from '../../globals/strings';

describe("TC03 - Remove Added Book to User", function() {

    let bookApi = new BookApi();
    let strings = new Strings();

    it("TC03- Positive Scenario", function() {

        bookApi.removeBookFromAUser(strings.validBookIsbn, strings.validUserName, strings.validPassword);

    });

    it("TC03- Negative Scenario", function() {

        bookApi.removeBookFromAUser(strings.invalidBookIsbn, strings.invalidUserName, strings.invalidPassword);

    });

});
