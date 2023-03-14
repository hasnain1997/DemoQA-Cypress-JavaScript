import {HomePage} from "./home_page_demoqa";


export class UserApi extends HomePage{

    createUserApiPositiveScenario(userName: string, password: string) {
        cy.request({
            method: "POST",
            url: `${this.strings.apiBaseUrl}Account/v1/User`,
            headers: { accept: "application/json", },
            body: {
                userName: userName,
                password: password
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            console.log(response.body.userID)
            cy.task('setGlobal', {'id': response.body.userID})
            console.log(response.body.token)

        });
    }

    generateAuthorizationCode(userName: string, password: string)
    {
        cy.request({
            method: "POST",
            url: `${this.strings.apiBaseUrl}Account/v1/GenerateToken`,
            headers: { accept: "application/json", },
            body: {
                userName: userName,
                password: password
            },
        }).then((response) => {
            cy.task('getGlobal').then((global_data: any) => {
                global_data['accessToken'] = response.body.token
                cy.task('setGlobal', global_data)
            })
        });
    }

    createUserApiNegativeScenario(userName: string, password: string)
    {
        cy.request({
            method: "POST",
            url: `${this.strings.apiBaseUrl}Account/v1/User`,
            failOnStatusCode: false,
            headers: { accept: "application/json", },
            body: {
                userName: userName,
                password: password
            },
        }).then((response) => {
            expect(response.status).to.eq(400);
            console.log(response)
        });
    }

    deleteUser()
    {
        cy.task('getGlobal').then((global_data: any) => {
            // assign here});
            let access_token: string = global_data['accessToken']
            console.log(access_token)

            cy.request({
                method: "DELETE",
                headers: {'authorization': 'Bearer ' + access_token,
                },
                url: `${this.strings.apiBaseUrl}Account/v1/User/` + global_data['id'],
            })
        })
    }
}
