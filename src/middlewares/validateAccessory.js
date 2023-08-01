const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    category: Joi.string().min(3).max(20).required(),
    description: Joi.string().min(10).max(100).required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
})

const validateAccessoryData = (req, res, next) => {

    const payload = req.body

    const { error } = schema.validate({
        name: payload.name,
        category: payload.category,
        description: payload.description,
        image: payload.image,
        price: payload.price,
    })

    error ? res.status(400).json({ message: error.details[0].message }) : next()
}

const validateId = (req, res, next) => {

    const idSchema = Joi.string().alphanum().min(20).max(25).required()

    const { id } = req.params

    const { error } = idSchema.validate(id)

    error ? res.status(400).json({ message: error.details[0].message }) : next()

}

module.exports = {
    validateAccessoryData,
    validateId
}