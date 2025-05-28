export class OverviewPage {
    checkOverviewPage() {
      cy.get('.title').should('have.text', 'Checkout: Overview');
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
  }