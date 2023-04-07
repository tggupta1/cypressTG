const fn = (a,b,c)=>{
    return a+b+c
}
describe('Learn invoke', ()=>{
    xit('invoke', ()=>{
        cy.wrap({sum:fn}).invoke('sum', 2,3,4).should('be.greaterThan',6)
    })

    xit('demo blaze', ()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.contains('Home').invoke('attr', 'href').should('equal','index.html')
    })

    it('Learn INVOKE', ()=>{
         cy.visit('https://candymapper.com')
         cy.intercept('GET','/find-my-candy').as('addElements')
         cy.wait('@addElements').should(response=>{
             cy.log(response)
         })

        //cy.intercept('https://candymapper.com/find-my-candy').as('getSettings')
        //cy.wait('@getSettings')
     
    })

    

})


