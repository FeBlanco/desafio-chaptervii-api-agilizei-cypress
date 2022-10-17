import spok from 'cy-spok'

class Schemas {
    getBookingSchema() {
        //Contrato
        return spok({
            firstname: spok.string,
            lastname: spok.string,
            totalprice: spok.number,
            depositpaid: spok.type('boolean'),
            bookingdates: {
                checkin: spok.string,
                checkout: spok.string
            },
            additionalneeds: spok.string
        })
        // fim do contrato
    }

}

export default new Schemas()