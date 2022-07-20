const { dataTshirt } = require('../dbContent/products/tshirts');

const getProductBySize = async (req, res) => {
    const { size } = req.query;
    const response = dataTshirt.reduce((acc, product) => {
        const checkedSize = product.size === size;
        if (checkedSize) acc = [...acc, product]
        return acc;
    }, []);
    res.send(response);
};

module.exports = {
    getProductBySize,
}