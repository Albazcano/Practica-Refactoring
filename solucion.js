function createOrder(detail, discountRate = 0) {
    const ivaRate = 0.21;
    //Order to return
    let order = {
        total: 0,
        subtotal: 0,
        discount: 0,
        iva: 0,
        detail
    }
   
    //Order detail
    orderDetail();
   
   
    //Order header - Total
    orderHeader();
   
    return order;
 
    function orderDetail () {
        detail.forEach(item => {
            item.total = item.quantity * item.price;
            item.discount = 0;
           
            //Order detail discount
            calculateDiscount (item);
        });
    }
 
   
    function calculateDiscount (item) {
    if (discountRate) {
        var originalTotal = item.total ;
 
        item.price *= (1 - discountRate);
        item.total = item.quantity * item.price;
 
        item.discount = originalTotal -item.total;
        }
    }
 
    function orderHeader () {
    detail.forEach(item => {
        order.total += item.total;
        order.discount += item.discount;
        });
   
    order.iva = order.total * ivaRate;
    order.subtotal = order.total - order.iva;
    }
}
 
let discount = 0;
 
let order = createOrder([
    { id: 1, name: 'Item 1', price: 12.25, quantity: 3},
    { id: 1, name: 'Item 2', price: 45.00, quantity: 3},
    { id: 1, name: 'Item 3', price: 12.25, quantity: 3},
    { id: 1, name: 'Item 4', price: 35.00, quantity: 1},
    { id: 1, name: 'Item 5', price: 78.33, quantity: 10}
    ], discount);
