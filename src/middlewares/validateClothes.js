const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    color: Joi.string().min(3).max(20).required(),
    size: Joi.number().min(1).max(10).required(),
    price: Joi.number().required(),
    description: Joi.string().min(10).max(100).required(),
    image: Joi.string().required(),
})

const validateClothesData = (req, res, next) => {

    const payload = req.body

    const { error } = schema.validate({
        name: payload.name,
        color: payload.color,
        size: payload.size,
        price: payload.price,
        description: payload.description,
        image: payload.image
    })

    error ? res.status(400).json({ message: error.details[0].message }) : next()
}


const validateIdByParams = (req, res, next) => {

    const idSchema = Joi.string().alphanum().min(20).max(25).required()

    const { id } = req.params

    const { error } = idSchema.validate(id)

    error ? res.status(400).json({ message: error.details[0].message }) : next()

}
const validateIdByBody = (req, res, next) => {

    const idSchema = Joi.string().alphanum().min(20).max(25).required()

    const { _id } = req.body

    const { error } = idSchema.validate(_id)

    error ? res.status(400).json({ message: error.details[0].message }) : next()

}

module.exports = {
    validateClothesData,
    validateIdByParams,
    validateIdByBody
}