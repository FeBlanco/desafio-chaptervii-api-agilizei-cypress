
class Assertions {
    shouldHaveStatus(response, status) {
        expect(response.status, `status is ${status}`).to.eq(status)
    }

    validateContractOf(response, schema) {
        return cy.wrap(response.body)
            .should(schema)
    }

    shouldBookingIdBePresent(response) {
        //Asserção no body onde o id não pode ser nulo
        expect(response.body.bookingid, 'booking exists').to.not.be.null;
    }

    shoouldHaveDefaultHeaders(response) {
        expect(response.headers, 'default headers').to.include({
            server: 'Cowboy',
            connection: 'keep-alive',
            'x-powered-by': 'Express'
        })
    }

    shouldHaveContentTypeAppJson(response) {
        expect(response.headers, 'content-type').to.include({
            'content-type': 'application/json; charset=utf-8'
        })
    }

    shouldDurationBeFast(response) {
        expect(response.duration, 'response duration').lessThan(900)
    }
}

export default new Assertions()