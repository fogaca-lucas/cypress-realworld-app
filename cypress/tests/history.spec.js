import { selectorsList } from './login.spec.js'
import './payment.spec.js'

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      cy.visit('http://localhost:3000');
      cy.get(selectorsList().usernameField).type("lucasfogacabr")
      cy.get(selectorsList().passwordField).type("lucasfogaca123")
      cy.get(selectorsList().submitButton).click()
    });
  });

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      cy.visit('http://localhost:3000');
      cy.get(selectorsList().usernameField).type("lucasfogacabr")
      cy.get(selectorsList().passwordField).type("lucasfogaca123")
      cy.get(selectorsList().submitButton).click()
    });
  });

