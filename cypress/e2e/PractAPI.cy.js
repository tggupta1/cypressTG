describe("Practice APIs", () => {

    it('Intercept usage in UI', () => {
        cy.intercept('GET', '**/AutomationPractice/').as('userInfo')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait('@userInfo').then((res) => {
            cy.log(res.response.statusCode)
            cy.log(res)
            expect(res.response.statusCode).to.equal(200)
        })
    })

    xit('Pract Get API', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
        }).then((resp) => {
            cy.log(resp.body.data.email)
        })
    })

    xit('Pract Post API', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((resp) => {
            cy.log(resp.body.id)
            cy.log(resp.body.name)
            expect(resp.body.name).to.equal('morpheus')
        })
    })

    let name;
    xit('Chain Requests', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        }).as('getUser')
        cy.get('@getUser').then((resp) => {
            name = resp.body.data.first_name
            cy.log('name', name)
            //return name
        }).then((name) => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    "name": name,
                    "job": "leader",
                }
            }).then(resp => {
                cy.log('resp is ', resp)
                //expect(resp.)
            })
        })
    })
})