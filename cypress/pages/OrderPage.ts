export class OrderPage {
  goToOrderPage() {
    cy.get('#finish').click();
  }

  checkPageTitle() {
    cy.get('.title').should('be.visible').and('have.text', 'Checkout: Complete!');
  }

  checkPonyExpressImage() {
    cy.get('.pony_express').should('be.visible');
  }

  checkCompleteText() {
    cy.get('.complete-text')
      .should('be.visible')
      .and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }

  checkBackToProductsButton() {
    cy.get('[data-test="back-to-products"]').should('be.visible');
  }

  checkOrderPage() {
    this.checkPageTitle();
    cy.wait(200)
    this.checkPonyExpressImage();
    cy.wait(200)
    this.checkCompleteText();
    cy.wait(200)
    this.checkBackToProductsButton();
    cy.wait(200)
  }

  goBackToProducts() {
    cy.get('[data-test="back-to-products"]').click();
  }
}