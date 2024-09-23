class BadEmailError extends Error { 
    constructor(msg) {
        super(msg)
    }
}

class BadMobilelError extends Error { 
    constructor(msg) {
        super(msg)
    }
}

function register( { email , mobile } ) {
    if(email.length < 5) throw new BadEmailError(`Email format is wrong`)

    if(mobile.length < 10) throw new BadMobilelError(`Wrong Mobile Number`)
    //save it 
}

try {
    register({ email : 'aa', mobile: '1234'})
} catch (error) {
    if(error instanceof BadEmailError) {

    }

    if(error instanceof BadMobilelError) {

    }
}
