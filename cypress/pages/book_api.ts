import {UserApi} from "./create_user_api";


export class BookApi extends UserApi{

    addBookToAUser(isbn: string, user: any, password: any) {
        this.createUserApiPositiveScenario(user, password)
        this.generateAuthorizationCode(user, password)
        cy.task('getGlobal').then((global_data: any) => {

            cy.request({
                method: "POST",
                url: `${this.strings.apiBaseUrl}BookStore/v1/Books`,
                headers: {'authorization': 'Bearer ' + global_data['accessToken']},
                body: {
                    userId: global_data['id'],
                    collectionOfIsbns: [
                        {
                            isbn: isbn
                        }
                    ]
                },
            }).then((response) => {
                expect(response.status).to.eq(201);
            });
        })
    }

    addBookToAUserNegitiveScenerio(isbn: string, user: any, password: any) {
        this.createUserApiPositiveScenario(user, password)
        this.generateAuthorizationCode(user, password)
        cy.task('getGlobal').then((global_data: any) => {

            cy.request({
                method: "POST",
                url: `${this.strings.apiBaseUrl}BookStore/v1/Books`,
                failOnStatusCode : false,
                headers: {'authorization': 'Bearer ' + global_data['accessToken']},
                body: {
                    userId: global_data['id'],
                    collectionOfIsbns: [
                        {
                            isbn: isbn
                        }
                    ]
                },
            }).then((response) => {
                expect(response.status).to.eq(400);
            });
        })
    }

    removeBookFromAUser(isbn: string, user: any, password: any) {
        this.addBookToAUser(isbn, user, password);

        cy.task('getGlobal').then((global_data: any) => {
            // assign here});
            let access_token: string = global_data['accessToken']
            console.log(access_token)
            cy.request({
                method: "DELETE",
                url: `${this.strings.apiBaseUrl}BookStore/v1/Book`,
                headers: {'authorization': 'Bearer ' + access_token},
                body: {
                    isbn: isbn,
                    userId: global_data['id']
                },
            }).then((response) => {
                expect(response.status).to.eq(204);
            });

        })
        this.deleteUser();
    }
}
