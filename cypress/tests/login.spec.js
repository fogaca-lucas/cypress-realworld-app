
export function selectorsList() {
    return {
        usernameField: "[name='username']",
        passwordField: "[type='password']",
        submitButton: "[type='submit']",
        errorMessage: "[data-test='signin-error']",
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        usernameField: "[name='username']",
        typePasswordField: "[name='password']",
        confirmPasswordField: "[name='confirmPassword']",
        lastNameRequired: "[data-test='signup-last-name']",
        newTransactionButton: "[data-test='nav-top-new-transaction']",
        tedParisianButton: "[data-test='user-list-item-uBmeaz5pX']",
        amountField: "[name='amount']",
        addNoteField: "[placeholder='Add a note']",
        payButton: "[data-test='transaction-create-submit-payment']"
    };
}

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
        cy.visit('http://localhost:3000/signin');
        const selectors = selectorsList();
        cy.get(selectorsList().usernameField).type("lucasfogaca")
        cy.get(selectorsList().passwordField).type("lucasfogaca123")
        cy.get(selectorsList().submitButton).click()
    })
  });

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/signin');
        const selectors = selectorsList();
        cy.get(selectorsList().usernameField).type("lucasfogaca")
        cy.get(selectorsList().passwordField).type("lucasfogaca")
        cy.get(selectorsList().submitButton).click()
        cy.get(selectorsList().errorMessage)
    });
  });

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get(selectorsList().firstNameField).type("Lucas")
        cy.get(selectorsList().lastNameField).type("Fogaca")
        cy.get(selectorsList().usernameField).type("lucasfogacabr")
        cy.get(selectorsList().typePasswordField).type("lucasfogaca123")
        cy.get(selectorsList().confirmPasswordField).type("lucasfogaca123")
        cy.get(selectorsList().submitButton).click()
    });
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get(selectorsList().firstNameField).type("Lucas")
      cy.get(selectorsList().usernameField).type("lucasfogacabr")
      cy.get(selectorsList().typePasswordField).type("lucasfogaca123")
      cy.get(selectorsList().confirmPasswordField).type("lucasfogaca123")
      cy.get(selectorsList().lastNameRequired)
    });
  });

