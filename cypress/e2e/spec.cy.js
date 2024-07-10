describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get(".main-header img");
  });
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get("h1").contains("React Tasks");
    cy.get("h1").should("have.length.gt",0)
  });
});

