describe("Rest API with cypress", ()=>{
    let authorization = '74b408b61167ccc6b124831304115cb6b0d1a5bf478c568447506b09c50b0a9f'
    let userData = require('../fixtures/users.json')

    xit("API header validation", ()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon").as("pokemon")
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json')
        cy.get('@pokemon').its('status').should('eq',200)
        cy.get('@pokemon').then((resp)=>{
            cy.log(JSON.stringify(resp.body))
        })
    })

    xit("Pokekmon Ditto", ()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("ditto")
        cy.get("@ditto").its('status').should('eq',200)
        cy.get('@ditto').then((resp)=>{
            cy.log(resp.body.abilities[0].ability.name)
        })
        cy.get('@ditto').then((resp)=>{
            expect(resp.body.abilities[0].ability.name).to.eq('limber')
        })
    })

    it('Rest API console - create user', ()=>{
        var pattern ='abcdefghijklmnopqrstuvwxyx'
        var randomText=""
        var testemail=""
        var userID=""
        for(var i=0;i<10;i++){
            randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        }
        cy.log(randomText)
        testemail = randomText+'@gmail.com'

        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users", 
            headers:{
                'Authorization':'Bearer '+authorization 
            },
            body:{
                "name":userData.name, 
                "gender":userData.gender, 
                "email":testemail, 
                "status":userData.status
            }
        }).then((resp)=>{
            expect(resp.body).has.property('name','Tenali Ramakrishna')
            expect(resp.body).has.property('status','active')
            cy.log(JSON.stringify(resp))
            userID=resp.body.id
            cy.log(resp.body.id)
            cy.log(userID)
        }).then((resp)=>{
            //const userID = resp.body.id
            cy.log('user id is '+userID)
            cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+userID,
                headers:{
                    'Authorization':'Bearer '+authorization 
                }
            }).as('getuser')
            cy.get('@getuser').then((resp)=>{
                expect(resp.body).has.property('id', userID)
                cy.log(JSON.stringify(resp.body))
            })
        })
    })

})