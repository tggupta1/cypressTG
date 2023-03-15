describe('Hello World', ()=>{
    it('works', ()=>{
        cy.visit('https://applitools.com/helloworld/?diff1')
        cy.eyesOpen({
            appName: 'Hello World',
            testName: "First Applitool test",
            browser: {width:800, height:600}
        });
        cy.eyesCheckWindow('Main Page')
        cy.get(':nth-child(3) > a').click();
        cy.eyesCheckWindow('Click!')
        cy.eyesClose();
    });
});