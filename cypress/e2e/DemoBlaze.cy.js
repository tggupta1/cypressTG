describe("Demo Blaze Automation", () => {
  let userdata
  let mysession

//Making this change in Branch - Change001

//2nd Change in Branch - Change002 --1
//pppp000

before(function () {
    cy.fixture('demoBlaze_NewMessage.json').then(function (data) {
      userdata = data;
      cy.log('****', userdata.ContactEmail)
    })
  })

  before(function () {
    cy.session('loginSession', () => {
      cy.visit('/')
      cy.get("a#login2").click()
      cy.wait(1000)
      cy.get("input#loginusername").type(userdata.LoginEmail)
      //cy.get("input#loginusername").type("test123_2023@gmail.com")
      cy.get("input#loginpassword").type(userdata.Password)
      cy.get("button[onclick='logIn()']").click()
      cy.title().should('eq', 'STORE')
      cy.wait(3000)
    }).then(session => {
      mysession = session
    })
  })


  it('Check Home page link', () => {
    cy.wrap(mysession).as('session')
    cy.get('@session').visit('/')
    cy.get("a[href='index.html']").click({ multiple: true })
    cy.title().should('eq', 'STORE')

  })

  xit('Check Contact page link', () => {
    
      cy.wait(3000)
      cy.visit('/')
      cy.xpath("//*[text()='Contact']").click({ multiple: true })
      cy.title().should('eq', 'STORE')
      cy.xpath("//button[text()='Send message']/preceding-sibling::button").click()
    })
  })

  xit('Check About us page link', () => {
    cy.session('loginSession', () => {
      cy.wait(3000)
      cy.visit('/')
      cy.get("a[href='index.html']").click({ multiple: true })
      cy.title().should('eq', 'STORE')
    })
  })

  xit('Check Cart page link', () => {
    cy.session('loginSession', () => {
      cy.wait(3000)
      cy.visit('/')
      cy.get("[onclick='showcart()']").click({ multiple: true })
      cy.title().should('eq', 'STORE')
    })
  })

  xit("Verify Contact Page", function () {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.wait(2000)
    cy.log('****', this.data.ContactEmail)
    //cy.get("input#recipient-email").type(this.data.ContactEmail)
    // cy.get("input#recipient-name").type(this.data.ContactName)
    // cy.get("textarea#message-text").type(this.data.Message)
  })

  xit('Verify Login in Demo Blaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.title().should('eq', 'STORE')
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
        cy.log({
          name: 'Verify Login in Demo Blaze',
          Message: 'Laptop is clicked'
        })

      })
    }
  })
