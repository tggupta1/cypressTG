describe("Demo Blaze Automation", () => {

    const data = "fixture/demoBlaze_NewMssage.json"
    let userDataQ = require("..//cypress//fixtures//demoBlaze_NewMessage.json")
    let userData
    before(()=>{
        cy.fixture("demoBlaze_NewMessage.json").then((data)=>{
            userData = data;
        })
    })

    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('eq', 'STORE')
    })

    it("Verify Contact Page", ()=>{
        cy.get("div.navbar-collapse ul li:nth-child(2) a.nav-link").click()
        cy.get("input#recipient-email").type(userDataQ.ContactEmail)
        cy.get("input#recipient-name").type(userDataQ.ContactName)
        cy.get("textarea#message-text").type(userDataQ.Message)
    })

    xit('Verify Login in Demo Blaze', () => {
        // cy.visit('https://www.demoblaze.com/')
        // cy.title().should('eq', 'STORE')
        cy.xpath("//a[text()='Phones']").invoke('text').then(($ele) => {
            cy.log("Element is ", $ele)
        })
        let shouldContinue = true;
        for (let i = 1; i < 5 && shouldContinue === true; i++) {
            cy.xpath("//div[@class='list-group']/a[" + i + "]").invoke('text').then(($ele) => {
                cy.log("Element is ", $ele)
                if ($ele === "Laptops") {
                    cy.xpath("//div[@class='list-group']/a[" + i + "]").click();
                    shouldContinue = false;
                }
                cy.log("should continue is ", shouldContinue)

            })
        }
    })
})