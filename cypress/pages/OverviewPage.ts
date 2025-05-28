export class OverviewPage {
  checkPageTitle() {
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Checkout: Overview');
  }

  checkCartItems() {
    cy.get('.cart_item')
      .should('exist');
  }

  checkItemTotalAmount() {
    cy.get('.inventory_item_price').then($prices => {
      const sum = $prices
        .toArray()
        .reduce((total, el) => {
          const text = el.textContent ?? '';
          return total + parseFloat(text.replace('$', '').trim());
        }, 0);

      cy.get('.summary_subtotal_label').should($label => {
        const labelText = $label.text();
        const totalValue = parseFloat(
          labelText.replace('Item total: $', '').trim()
        );
        expect(totalValue).to.equal(sum);
      });
    });
  }

  checkCancelButton() {
    cy.get('#cancel').should('be.visible');
  }

  checkFinishButton() {
    cy.get('#finish').should('be.visible');
  }

  checkOverviewPage() {
    this.checkPageTitle();
    cy.wait(200)
    this.checkCartItems();
    cy.wait(200)
    this.checkItemTotalAmount();
    cy.wait(200)
    this.checkCancelButton();
    cy.wait(200)
    this.checkFinishButton();
  }
}