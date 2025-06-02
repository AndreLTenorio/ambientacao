Cypress.Commands.add('preencherSeExistir', (selector, valor) => {
  cy.get('body').then(($body) => {
    const $element = $body.find(selector);

    if ($element.length && $element.is(':visible')) {
      cy.get(selector).clear().type(valor);
    }
  });
})