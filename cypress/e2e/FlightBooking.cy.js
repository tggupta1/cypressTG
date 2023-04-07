describe('Book Flights', () => {

    it('Print footer links', ()=>{
        cy.visit("https://rahulshettyacademy.com/lifetime-access")
        cy.get("ul.footer-nav a").each((ele, index, list)=>{
            if(index===0){
                cy.wrap(ele).scrollIntoView()
                return false;
            }
        })
        cy.wait(2000)
        cy.get("ul.footer-nav a").each((ele, index, list)=>{
            cy.wrap(ele).invoke('attr','href').then((href)=>{
                cy.log(href)
            })
        })
    })
    
    xit('Print testimonials',()=>{
        cy.visit("https://rahulshettyacademy.com/lifetime-access")
        cy.get("div.name b").each((ele, index, list)=>{
            if(index===0){
                cy.wrap(ele).scrollIntoView()
                return false
            }
        })
        cy.wait(3000)
        cy.get("div.name b").then((ele)=>{
            for(let i=0;i<ele.length;i++){
                cy.wrap(ele[i]).invoke("text").then((ele)=>{
                    cy.log(ele)
                })
            }
        })
    })

    xit('Print features', ()=>{
        cy.visit("https://rahulshettyacademy.com/lifetime-access")
        cy.xpath("//tr/td[@class='text-center']/preceding-sibling::td[@scope='row']")
        .each((item, index, list)=>{
            cy.log(item.text())
        })
        cy.log("*****************")
        cy.xpath("//tr/td[@class='text-center']/preceding-sibling::td[@scope='row']")
        .then((ele)=>{
            for(let i=0;i<ele.length;i++){
                cy.wrap(ele[i]).invoke('text').then((el)=>{
                    cy.log(el)
                })
            }
        })
    })

    xit('Print Plans', ()=>{
        cy.visit("https://rahulshettyacademy.com/lifetime-access")
        cy.get("table.pricing-table th h6").then((ele)=>{
            for(let i=0;i<ele.length;i++){
                cy.log(ele.text())             
            }
            
        })
    })
    
    xit('Select Country', ()=>{
        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("input#autosuggest").type("aus")
        cy.get("a.ui-corner-all").each((ele, index, list)=>{
            cy.log(ele.text())
        })
        cy.get("table.pricing-table th h6").then((ele)=>{
            for(let i=0;i<ele.length;i++){
                cy.log(cy.wrap(ele[i]).text())                
            }
            
        })
        //cy.wait(2000)
    })

    xit('Verify checkin', ()=>{
        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("div.button-align-center li.web-checkin a").trigger('mouseover')
        cy.wait(5000)
        cy.get("div.button-align-center li.web-checkin a").click()
        cy.get("div.button-align-center li.web-checkin div.fareToolTip p")
        .each((ele, index, list)=>{
            cy.log(ele.text())
        })
        //cy.pause()
    })
    
    xit('Select MultiCity', () => {
        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("input#ctl00_mainContent_rbtnl_Trip_2").click()
        cy.pause()
        cy.get("a#MultiCityModelAlert").click()
        cy.get("span#view_fulldate_id_1").invoke('text').then((text) => {
            cy.log(text)
        })
    })

xit('Print Traveller Links', () => {
    cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
    cy.get('div#traveller-home').scrollIntoView()
    cy.get('div#traveller-home div span.group-heading').each((ele, index, list) => {
        cy.log(ele.text())
        if (ele.text().includes('Rewards')) {
            cy.xpath("//span[text()='Rewards']/parent::a").invoke('removeAttr', 'target').click()
            cy.url().then((url) => {
                cy.log(url)
            })
        }
    })
})

xit('Print all cities', () => {
    cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
    // cy.get('#ctl00_mainContent_ddl_originStation1').invoke('attr', 'style', 'display: block')
    // cy.get('#ctl00_mainContent_ddl_originStation1').should('be.visible')

    cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').click()
    // cy.get("select#ctl00_mainContent_ddl_originStation1 option[value='DAC']").click({force: true})
    // cy.get('select#ctl00_mainContent_ddl_originStation1 option').each((ele, index, list) => {
    //     if (ele.text().includes('Delhi (DEL)')) {
    //         cy.log(ele.text())
    //         cy.wrap(ele).click({force: true})
    //     }
    // })
    cy.get('input#ctl00_mainContent_ddl_originStation1_CTXT').type("DEL")
    cy.wait(1000)
    //cy.get('#ctl00_mainContent_ddl_destinationStation1_CTXT').click()
    cy.get('input#ctl00_mainContent_ddl_destinationStation1_CTXT').type("AMD")
    cy.wait(1000)
    cy.get("#ui-datepicker-div table tbody  tr td[data-handler='selectDay']")
        .each((ele, index, list) => {
            if (ele.text() === '29') {
                cy.log(ele.text())
                cy.wrap(ele).click()
            }
        })
    cy.get('#ctl00_mainContent_btn_FindFlights').click()

})
})