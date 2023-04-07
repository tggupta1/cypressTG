describe("GreenKart portal - Automation Practice", () => {

    before(('Visit Portal'), () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it('Print Common things in Automation', () => {
        //iterate the for loop
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input#confirmbtn").click()

        cy.get('header.jumbotron a.blinkingText').invoke('text').then((linkText) => {
            console.log(linkText);
        });
        cy.wait(2000)
        cy.get("input.radioButton[value=radio1]").click()
        cy.get("input#autocomplete").type("SW")
        cy.get("ul.ui-menu li div").each((ele, index, list) => {
            if (ele.text() === "Sweden") {
                cy.wrap(ele).click()
            }
        })
        cy.get("select#dropdown-class-example").select("option2")

        const rows = cy.get("table#product[name=courses] tr")
        // for(let i=0;i<rows.length;i++){
        //     const course = rows.eq(i).find("td:nth-child(2)").text()
        //     const price = rows.eq(i).find("td:nth-child(3)").text()

        //     cy.log("Course is ",course," Price is ",price)
        // }

        cy.get("table#product[name=courses] tr").each((ele) => {
            const course = ele.find('td:nth-child(2)').text()
            const price = ele.find('td:nth-child(3)').text()

            cy.log("course ", course, " price ", price)
        })
    })



    xit('Print items names and prices', () => {
        cy.wait(2000)
        //cy.log('&*&*&',cy.location('host'))
        //cy.log('&*&*&',cy.location('href'))
        // cy.get("div.products div").each((ele) => {
        //     const productName = ele.find("h4").text()
        //     const price = ele.find("p").text()
        //     if ((productName !== '') && (parseInt(price))>80 ){
        //         cy.log("Product is ", productName, " and its price is ", price)
        //     }
        // })
        cy.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        cy.get("input.search-keyword").type('br')
        cy.wait(2000)
        //cy.get("h4.product-name").contains('Brinjal').should('have.length',2)
        cy.get("h4.product-name").then((ele) => {
            for (let i = 0; i < ele.length; i++) {
                cy.wrap(ele).invoke('text').contains("Brinjal").then((ele2) => {
                    cy.log(ele2)
                })
            }
        })
    })

    xit("Verify Header links", () => {
        cy.get("div.container div.cart a").then((ele) => {
            for (let i = 0; i < ele.length; i++) {
                cy.wrap(ele[i]).invoke('attr', 'href').then((element) => {
                    cy.log(element)
                })

            }
        })
    })
})