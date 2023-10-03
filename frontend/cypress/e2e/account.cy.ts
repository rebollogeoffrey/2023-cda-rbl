describe('Account', () => {

  //-----------> CREATE
  it('Create should fail', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Login');
    cy.contains('New Player');
    cy.get('.form-create');
    cy.get('#username-create').type('Username example');
    cy.get('#email-create').type('username@example.com');
    cy.get('#password-create').type('pass');
    cy.get('#confirm-password-create').type('pass');
    cy.get('#signup-button').click();
    // TODO : Uncomment this when validation is working
    // cy.contains('Password should have');
    // cy.url().should('be.equal', 'http://localhost:5173/');
  });

  it('Create should pass', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Login');
    cy.contains('New Player');
    cy.get('.form-create');
    cy.get('#username-create').type('Username example');
    cy.get('#email-create').type('username@example.com');
    cy.get('#password-create').type('This is a p4ssword example!');
    cy.get('#confirm-password-create').type('This is a p4ssword example!');
    cy.get('#signup-button').click();
    // TODO : Uncomment this when validation is working
    // cy.url().should('be.equal', 'http://localhost:5173/hub');
  });

  //-----------> UPDATE
  it('Update should fail', () => {
    cy.visit('http://localhost:5173/hub');
    cy.get('.button-burger').click();
    cy.get('.menu-items > .account > h3').click();
    cy.get('.button-burger').click();
    cy.contains('account');
    cy.get('.form-modify');
    cy.get('#username-modify').type('Username example');
    cy.get('#email-modify').type('username@example.com');
    cy.get('#password-modify').type('pass');
    cy.get('#confirm-password-modify').type('password');
    cy.get('#modify-button').click();
    // TODO : Uncomment this when connection is working
    // cy.contains('should');
    // cy.url().should('be.equal', 'http://localhost:5173/account');
  });

  it('Update should pass', () => {
    cy.visit('http://localhost:5173/hub');
    // Going to account page
    cy.get('.button-burger').click();
    cy.get('.menu-items > .account > h3').click();
    cy.get('.button-burger').click();
    cy.contains('account');
    cy.get('.form-modify');
    cy.get('#username-modify').type('Username example');
    cy.get('#email-modify').type('username@example.com');
    cy.get('#password-modify').type('This is a NEW p4ssword example!');
    cy.get('#confirm-password-modify').type('This is a NEW p4ssword example!');
    cy.get('#modify-button').click();
    // TODO : Uncomment this when connection is working
    // cy.url().should('be.equal', 'http://localhost:5173/account');
  });

  //-----------> LOGOUT
  it('Logout should pass', () => {
    cy.visit('http://localhost:5173/hub');
    cy.get('.button-burger').click();
    cy.get('.logout > a > h3').click();
    cy.get('.button-burger').click();
    cy.contains('Login');
    cy.contains('New Player');
    // cy.url().should('be.equal', 'http://localhost:5173/');
  });

  //-----------> LOGIN 
  it('Login should fail', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Login');
    cy.contains('New Player');
    cy.get('.form-login');
    cy.get('#username-login').type('Username example');
    cy.get('#password-login').type('pass');
    cy.get('#signin-button').click();
    // TODO : Uncomment this when db is linked
    // cy.contains('Wrong password');
    // cy.url().should('be.equal', 'http://localhost:5173/');
  });

  it('Login should pass', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Login');
    cy.contains('New Player');
    cy.get('.form-login');
    cy.get('#username-login').type('Username example');
    cy.get('#password-login').type('passW0rd!TRUE');
    cy.get('#signin-button').click();
    // TODO : Uncomment this when db is linked
    // cy.contains('Login successful');
    // cy.url().should('be.equal', 'http://localhost:5173/hub');
  });

  //-----------> DELETE
  it('Delete should fail', () => {
    cy.visit('http://localhost:5173/hub');
    // Going to account page
    cy.get('.button-burger').click();
    cy.get('.menu-items > .account > h3').click();
    cy.get('.button-burger').click();
    cy.contains('account');
    // Click on button to delete
    // TODO : Uncomment those when button and redirect are working
    // cy.get('.button-delete').click();
    // cy.url().should('be.equal', 'http://localhost:5173/')
  });
})