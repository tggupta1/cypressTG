describe("Swag Labs Automation",()=>{

    xit('Verify Login in Swag Labs', ()=>{
        let username = "standard_user"
        let password = "secret_sauce"
        let title = "Swag Labs"
        cy.LoginSwagLabs(username, password, title)
    })

    before(function () {
        cy.fixture('example.json').then(function (data) {
          this.data = data;
        })
      })

      it('Cypress Test Case - Understanding Fixtures', function () {
        cy.log("*****",this.data.name)
      })
    
})