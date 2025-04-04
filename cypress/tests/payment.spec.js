import { selectorsList } from './login.spec.js';

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      cy.visit('http://localhost:3000');
      cy.get(selectorsList().usernameField).type("lucasfogaca")
      cy.get(selectorsList().passwordField).type("lucasfogaca123")
      cy.get(selectorsList().submitButton).click()
      cy.get(selectorsList().newTransactionButton).click()
      cy.get(selectorsList().tedParisianButton).click()
      cy.get(selectorsList().amountField).type("1")
      cy.get(selectorsList().addNoteField).type("Borgar paid")
      cy.get(selectorsList().payButton).click()
    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      // Implemente os passos do caso de teste aqui
      cy.visit('http://localhost:3000');
      cy.get(selectorsList().usernameField).type("lucasfogaca")
      cy.get(selectorsList().passwordField).type("lucasfogaca123")
      cy.get(selectorsList().submitButton).click()
      cy.get(selectorsList().newTransactionButton).click()
      cy.get(selectorsList().tedParisianButton).click()
      cy.get(selectorsList().amountField).type("500")
      cy.get(selectorsList().addNoteField).type("É para falhar sem dinheiro")
      cy.get(selectorsList().payButton).click()

    });
  });
