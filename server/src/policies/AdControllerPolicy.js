const Joi = require('joi')

module.exports = {
    create (req, res, next) {
        const schema = {
            manufacturer: Joi.string().min(1).max(30),
            model: Joi.string().min(1).max(20),
            price: Joi.number().min(1).max(50000000),
            productionYear: Joi.number().min(1900).max(2019),
            color: Joi.string().allow('').allow(null).regex(new RegExp('^[a-zA-Z]')).min(1).max(20),
            kilometers: Joi.number().allow(null).min(1).max(2000000),
            kW: Joi.number().allow(null).min(1).max(7000),
            cm3: Joi.number().allow(null).min(1).max(10000),
            image: Joi.string().allow('').allow(null).min(1).max(1000),
            adOwner: Joi.string().min(3).max(100),
            contactNumber : Joi.string().regex(new RegExp('^[0-9]{9,15}$'))
        }

        const {error, value} = Joi.validate(req.body, schema)
        
        if(error) {
            console.log(error.details[0].context.key)
            switch (error.details[0].context.key) {
                case 'manufacturer': 
                    res.status(400).send({
                        error: 'You must provide valid car manufacturer'
                    })
                    break 
                case 'model': 
                    res.status(400).send({
                        error: 'You must provide valid car model'
                    })
                    break 
                case 'price': 
                    res.status(400).send({
                        error: 'You must provide valid price'
                    })
                    break 
                case 'productionYear': 
                    res.status(400).send({
                        error: 'You must provide valid production year'
                    })
                    break 
                case 'color': 
                    res.status(400).send({
                        error: 'Invalid color field'
                    })
                    break
                case 'kilometers': 
                    res.status(400).send({
                        error: 'Invalid kilometers field'
                    })
                    break  
                case 'kW': 
                    res.status(400).send({
                        error: 'Invalid kw field'
                    })
                    break
                case 'cm3': 
                    res.status(400).send({
                        error: 'Invalid cm3 field'
                    })
                    break  
                case 'contactNumber': 
                    res.status(400).send({
                        error: 'You must provide valid contact number'
                    })
                    break 
                case 'image': 
                    res.status(400).send({
                        error: 'Invalid image field'
                    })
                    break  
                case 'adOwner': 
                    res.status(400).send({
                        error: 'Error while creating ad'
                    })
                    break
                default: 
                    res.status(400).send({
                        error: 'Invalid ad information'
                    })
            }
        }
        else {
            next()
        }

    }

}