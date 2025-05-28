export class OrderPage {
    goToOrderPage() {
      cy.get('#finish').click();
    }
  
    checkOrderPage() {
      cy.get('.title').should('have.text', 'Checkout: Complete!');
      cy.get('.pony_express').should('be.visible');
      cy.get('.complete-text').should(
        'contain.text',
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
      );
      cy.get('[data-test="back-to-products"]').should('be.visible');
    }
  }