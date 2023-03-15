describe('Amazon Portal Testing', ()=>{

    xit('Scenario 1', function (){
        cy.visit("https://automationqahub.com/appium-tips-and-tricks/");
        cy.get("input[name='email']").type('test87610@gmail.com')
        cy.get('button.wp-block-button__link').then(($btn)=>{
            cy.wrap($btn).should('contain.text','Subscribe')
            .then(($btn)=>{cy.wrap($btn).click()})
        })        
     });

     it('Verify computer', ()=>{
        //cy.visit("https://computer-database.gatling.io/computers")
        cy.visit("/")
        cy.xpath("//a[text()='ACE']").then(($ele)=>{
            const href = $ele.prop('href')
            cy.log("((**((((*****",href)
        })
     })
     
     xit('Verify if user is able to click checkbox button', ()=>{
        cy.visit("https://demo.applitools.com/")
        cy.get("input.form-check-input").check()
     })
})
