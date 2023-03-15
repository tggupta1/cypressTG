describe("Swag Labs Automation",()=>{

    it('Verify Login in Swag Labs', ()=>{
        let username = "standard_user"
        let password = "secret_sauce"
        let title = "Swag Labs"
        cy.LoginSwagLabs(username, password, title)
    })
})