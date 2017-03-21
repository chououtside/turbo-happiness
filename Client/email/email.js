/* global emailjs */

var emailCreator = function(customerInfo, orderInfo, tipAmount) {
  
}

var orderCreator = function(bag) {

}


export function sendEmail (customerInfo, orderInfo, tipAmount) {
  // emailjs.send('chouming3@gmail.com', 'chinesegrub', {
  //   'name': `${customerInfo.firstName} ${customerInfo.lastName}`,
  //   'email': customerInfo.email,
  //   'restaurant': orderInfo.currentRestaurant.name,
  //   'details': '<html lang="en"><head><meta charset="UTF-8"><title>Document</title><style>.delivery-info div {display: inline-block;width: 49%;}.customer-info p, .restaurant-info p {margin: 0;padding: 0;}</style></head><body><div><h1>7:11 PM Delivery</h1><p>Deliver before 7:11 on Mar 10, 2017</p><table><tr><th align="middle">Quantity</th><th align="left">Description</th><th align="right">Price</th></tr><tr><td align="right">1</td><td align="left">Kung Pao Chicken</td><td align="right">$14.95</td></tr><tr><td align="right">1</td><td align="left">Hot Sour Soup</td><td align="right">$3.25</td></tr><tr><td></td><td></td><td>Subtotal: $18.20</td></tr></table></div><div class="delivery-info"><div class="customer-info"><p>Deliver To: Stacy Edgar</p><p><bold>858-243-1040</bold></p><p>1355 17th St NW</p><p>322</p><p>Washington, DC 20036</p><p><bold>Order Instructions:</bold> dial call box for Stacy edgar to enter building</p></div><div class="restaurant-info"><p>Delivery From: New Dynasty</p><p><bold>202-296-6688</bold></p><p>2020 P St NW</p><p>Washington, DC 20036</p></div></div></body></html>'
  // })
  console.log(arguments, 'this is arguments')
  let html = emailCreator(customerInfo, orderInfo, tipAmount)
  console.log(html)
}
