module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    // Describe the logic inside the function
    function productURL(msg, respond) {
        const productId = msg.productId;
        const product = mockData.find((item) => item.product_id === productId);

        if (product) {
            respond(null, { result: product.product_url });
        } else {
            respond(null, { result: 'Product not found'});
        }
    }

    // Describe the logic inside the function
    function productName(msg, respond) {
        const productId = msg.productId;
        const product = mockData.find((item) => item.product_id === productId);

        if (product) {
            respond(null, { result: product.product_name });
        } else {
            respond(null, { result: 'Product not found'});
        }
    }
}