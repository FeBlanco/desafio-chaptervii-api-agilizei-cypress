/// <reference types="cypress"  />
import assertions from '../support/api/assertions';
import request from '../support/api/resquests'
import schemas from '../support/api/schemas';



context('Booking', () => {

    before(() => {
        request.doAuth()
    })

    it('Validar o contrato do GET Booking @contract', () => {
        request.getBooking().then(getBookingResponse => {
            assertions
                .validateContractOf(
                    getBookingResponse, schemas.getBookingSchema()
                )
        })
    })

    it('Criar uma reserva com sucesso @functional', () => {
        request.postBooking().then(postBookingResponse => {
            assertions.shouldHaveStatus(postBookingResponse, 200)
            assertions.shouldBookingIdBePresent(postBookingResponse)
            assertions.shoouldHaveDefaultHeaders(postBookingResponse)
            assertions.shouldHaveContentTypeAppJson(postBookingResponse)
            assertions.shouldDurationBeFast(postBookingResponse)
        })
    })

    it('Alterar uma reserva com sucesso @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.putBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
            })
        })
    })

    it('Tentar alterar uma reserva sem token @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.putBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    })

    it('Tentar alterar uma reserva com token inválido @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.putBookingInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    })

    it('Tentar alterar uma reserva inexistente @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.putBookingInvalidId(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 405)
            })
        })
    })


    it('Excluir uma reserva com sucesso @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.deleteBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })

    })

    it('Tentar excluir uma reserva sem token @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.deleteBookingWithoutToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    })

    it('Tentar excluir uma reserva com token invalido @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.deleteBookingInvalidToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    })

    it('Tentar excluir uma reserva com token invalido @functional', () => {
        request.postBooking().then(postBookingResponse => {
            request.deleteBookingInvalidId(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 405)
            })
        })
    })


})