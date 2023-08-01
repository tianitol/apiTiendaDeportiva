const validateCreateAccessory = (req, res, next) => {
    const { name, price, category } = req.body;
    if (!name || !price || !category) {
        return res.status(400).json({ error: 'Campos name, price y category son obligatorios' })
    }
    next();
};

module.exports = {
    validateCreateAccessory
}