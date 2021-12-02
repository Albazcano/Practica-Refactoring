function createOrder(detail, discountRate = 0) {
    let total = 0,
    subtotal = 0,
    discount = 0,
    iva = 0;
        
    detail.forEach(item => {
            item.total = item.quantity *item.price;
            item.discount = 0;
  
    if (discountRate) {
        var originalTotal = item.total;

        item.price *= (1 - discountRate);
        item.total = item.quantity * item.price;

        item.discount = originalTotal -item.total;
    }  

    total += item.total;
    discount += item.discount;
});

iva = total * 0.21;
subtotal = total - iva;    

    return {
        total,
        subtotal,
        iva,
        discount,
        detail
    };     

}

let discount = 0;

let order = createOrder([
    { id: 1, name: 'Item 1', price: 12.25, quantity: 3},
    { id: 1, name: 'Item 2', price: 45.00, quantity: 3},
    { id: 1, name: 'Item 3', price: 12.25, quantity: 3},
    { id: 1, name: 'Item 4', price: 35.00, quantity: 1},
    { id: 1, name: 'Item 5', price: 78.33, quantity: 10}
    ], discount);

