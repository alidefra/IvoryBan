describe('EligibilityChecker',function(){
    it('EligibilityChecker',function(){
        
        cy.visit('https://ivy-web-tst.azure.defra.cloud');
        cy.get('[type="radio"]').check('I’d like some help to work this out')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)

      //Contain Elephant Ivory - Don't need service

        cy.get('[type="radio"]').check('No')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
      // Don't need service
        
        cy.title()
        cy.wait(2000)
      // Return to guidence
      cy.get('button[id="finish"]').click()
       
    })

})
