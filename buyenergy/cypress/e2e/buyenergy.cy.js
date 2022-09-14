/// <reference types="cypress" />


describe('Buy energy', () => {
    beforeEach(function() {
      cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/');
    })

    it('Verify the Buy energy journey',function() {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/');
        cy.contains('ENSEK Energy Corp.').should('be.visible');
        //Gas
        cy.get('.row > :nth-child(1) > :nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > #energyType_AmountPurchased').clear().type("20");
        cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
        cy.contains('Sale Confirmed!').should('be.visible');
        cy.contains('Thank you for your purchase of 20 units of Gas').should('be.visible');
        cy.get('.btn').click();
        // ELectricity
        cy.get(':nth-child(3) > :nth-child(6) > #energyType_AmountPurchased').clear().type("20");
        cy.get(':nth-child(3) > :nth-child(7) > .btn').click();
        cy.contains('Sale Confirmed!').should('be.visible');
        cy.contains('Thank you for your purchase of 20 units of Electricity').should('be.visible');
        cy.get('.btn').click();
        // Oil
        cy.get(':nth-child(4) > :nth-child(6) > #energyType_AmountPurchased').clear().type("20");
        cy.get(':nth-child(4) > :nth-child(7) > .btn').click();
        cy.contains('Sale Confirmed!').should('be.visible');
        cy.contains('Thank you for your purchase of 20 units of Oil').should('be.visible');
        //cy.get('.btn').click();
        })

   
})