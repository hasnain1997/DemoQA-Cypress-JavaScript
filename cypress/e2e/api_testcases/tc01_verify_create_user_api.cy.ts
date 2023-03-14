import {UserApi} from "../../pages/create_user_api";
import { Strings } from '../../globals/strings';

describe("TC01 - Create User API", function() {


    let userApi = new UserApi();
    let strings = new Strings();


    it("TC01- Positive Scenario", function() {

        userApi.createUserApiPositiveScenario(strings.validUserName, strings.validPassword)
        userApi.generateAuthorizationCode(strings.validUserName, strings.validPassword);
        userApi.deleteUser()
    });

    it("TC01- Negative Scenario", function() {
        userApi.createUserApiNegativeScenario(strings.invalidUserName, strings.invalidPassword);
    });

});
