export class ShoppingCartPage {
  checkPageTitle() {
    cy.get('.title').should('be.visible').and('have.text', 'Your Cart');
  }

  checkQuantityLabels() {
    cy.get('.cart_quantity_label').should('exist');
  }

  checkDescriptionLabels() {
    cy.get('.cart_desc_label').should('exist');
  }

  checkContinueShoppingButton() {
    cy.get('#continue-shopping').should('be.visible');
  }

  checkCheckoutButton() {
    cy.get('#checkout').should('be.visible');
  }

  checkCartPage() {
    this.checkPageTitle();
    cy.wait(200)
    this.checkQuantityLabels();
    cy.wait(200)
    this.checkDescriptionLabels();
    cy.wait(200)
    this.checkContinueShoppingButton();
    cy.wait(200)
    this.checkCheckoutButton();
    cy.wait(200)
  }

  goToCheckout() {
    cy.get('#checkout').click();
  }
}