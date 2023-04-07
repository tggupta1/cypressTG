describe('Different commands', ()=>{
    it('Different functions', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input.btn-style[value='Alert']").click()
        cy.wait(2000)
    })
})