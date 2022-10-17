/// <reference types="cypress"  />

import assertions from '../support/api/assertions';
import request from '../support/api/resquests'

context('Ping', () => {
    it('GET Healtcheck -> Validar que a aplicação esta no ar @healtcheck', () => {

      request.getPing().then(getPingResponse => {
        assertions.shouldHaveStatus(getPingResponse, 201)
      })
      
      // requests
      // asserções
       // cy.resquest -> response -> body,  status, headers
       // .its ->
    });
});