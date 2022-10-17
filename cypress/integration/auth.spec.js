/// <reference types="cypress"  />
import assertions from '../support/api/assertions';
import request from '../support/api/resquests'


it('Fazer autenticação com sucesso @function', () => {

    request.postAuth().then(AuthPostResponse => {
        assertions.shouldHaveStatus(AuthPostResponse, 200)
    })
    
})