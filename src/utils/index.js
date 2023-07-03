/* param (array) products cartProduct
returns {number} total Price */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => (sum += product.price));
    return parseFloat(sum.toFixed(2));
}
