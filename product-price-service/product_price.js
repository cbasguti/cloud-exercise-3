module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    // Add the patterns and their corresponding functions
    this.add('role:productPrice,cmd:getProductPrice', productPrice);

    // Describe the logic inside the function
    function productPrice(msg, respond) {
        const productId = msg.productId;
        const product = mockData.find((item) => item.product_id === productId);

        if (product) {
            respond(null, { result: product.product_price });
        } else {
            respond(null, { result: 'Product not found'});
        }
    }
}