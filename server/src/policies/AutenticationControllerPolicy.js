const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            confirmedPassword: Joi.any().valid(Joi.ref('password')).required()
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error) {
            switch (error.details[0].context.key) {
                case 'email': 
                    res.status(400).send({
                        error: 'You must provide valid email adress'
                    })
                    break 
                case 'password':
                    res.status(400).send({
                        error: 'Password can contain only letters and digits and must have between 8 and 32 characters'
                    })
                    break
                case 'confirmedPassword':
                    res.status(400).send({
                        error: 'Passwords do not match'
                    })
                    break
                default: 
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        }
        else {
            next()
        }

    }

}