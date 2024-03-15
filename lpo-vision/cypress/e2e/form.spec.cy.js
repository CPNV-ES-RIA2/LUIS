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
