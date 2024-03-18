describe('Form Submission with default values + an image', () => {
  it('Should show labels', () => {
    // given
    cy.visit('http://localhost:8080');
    cy.get('input[type="file"]').attachFile('porto-lineup.jpg');

    // when
    cy.get('button[type="submit"]').click();

    // then
    cy.get('.result').should('be.visible');
    cy.get('input[type="file"]').should('be.visible');
  });
});

describe('Change GUI language without reloading the page', () => {
  it('Should change the language', () => {
    // given
    cy.visit('http://localhost:8080');

    // when
    cy.get('button').contains('en').click();
    cy.get('button').contains('pt').click();

    // then
    cy.get('button').contains('pt').should('be.visible');
  });
});
