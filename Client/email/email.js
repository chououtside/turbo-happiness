/* global emailjs */

const convertDateTime = (date) => {
  const convertTime = (time) => {
    let hour = Number(time.substring(0, 2))
    if (hour > 12) {
      hour = hour - 12
    }
    return Number(time.substring(0,2)) < 12 ? `${hour}${time.substring(2,5)} AM` : `${hour}${time.substring(2,5)} PM`
  }
  return {
    time: convertTime(date.substring(16,21)),
    date: `${date.substring(4,10)}, ${date.substring(11,16)}`
  }
}

const headerCreator = () => {
  let dateTime = convertDateTime(Date().toString())
  return `<h1>${dateTime.time} Delivery</h1><p>Deliver before ${dateTime.time} on ${dateTime.date}</p>`
}

const emailCreator = (customerInfo, bag, tipAmount) => {
  let header = headerCreator()
  let customerDetails = customerInfoCreator(customerInfo)
  let restaurantDetails = restaurantInfoCreator(bag.currentRestaurant)
  let itemDetails = itemBreakdown(bag.items)
  let costDetails = costBreakdown(bag.subTotal, 10, tipAmount)

  return `<html lang="en"><head><meta charset="UTF-8"><title>Document</title><style>body {padding: 10px 25px;}span {font-weight: bold;}.delivery-info div {margin-bottom: 15px;}.customer-info {margin-bottom: 20px;}.customer-info p, .restaurant-info p {margin: 0;margin-bottom: 5px;padding: 0;}</style></head><body><div>${header}<div class="delivery-info">${customerDetails}${restaurantDetails}</div><h3>ORDER DETAILS</h3><table>${itemDetails}${costDetails}</table></div><div><p>Credit card info is not shown, due to this site being used for demo purposes</p></div></body></html>`
  
}

const itemBreakdown = (itemsInBag) => {
  let tableRows = ''

  const tableRow = (quantity, item, price) => {
    return `<tr><td align="right">${quantity}</td><td align="left">${item}</td><td align="right">$${price}</td></tr>`
  }
  
  for (let i = 0; i < itemsInBag.length; i++) {
    let item = itemsInBag[i]
    tableRows = tableRows + tableRow(item.quantity, item.item, item.price)
  }

  return `<tr><th align="middle">Quantity</th><th align="left">Description</th><th align="right">Price</th></tr>${tableRows}`
}

const costBreakdown = (subtotal, tax, tip) => {
  let taxAmount = Number((subtotal * (tax / 100)))
  return `<tr><td></td><td></td><td align="right">Subtotal: $${Number(subtotal).toFixed(2)}</td></tr><tr><td></td><td></td><td align="right">tax: $${taxAmount.toFixed(2)}</td></tr><tr><td></td><td></td><td align="right">Tip: $${Number(tip).toFixed(2)}</td></tr><tr><td></td><td></td><td align="right">Total: $${(Number(subtotal) + Number(tip) + taxAmount).toFixed(2)}</td></tr>`
}

const customerInfoCreator = (customerInfoObject) => {
  let {
    firstName,
    lastName,
    phoneNumber,
    address1,
    address2,
    city,
    state,
    zipcode,
    specialInstructions
  } = customerInfoObject

  specialInstructions = !specialInstructions ? '' : specialInstructions
  address2 = !address2 ? '' : address2

  return `<div class="customer-info"><p><span>Deliver To: </span>${firstName} ${lastName}</p><p><span>${phoneNumber}</span></p><p>${address1}</p><p>${address2}</p><p>${city}, ${state} ${zipcode}</p><p><span>Order Instructions:</span> ${specialInstructions}</p></div>`
}

const restaurantInfoCreator = (restaurantInfoObject) => {
  let {
    name,
    phoneNumber,
    streetAddress,
    city,
    state,
    zipcode
  } = restaurantInfoObject

  return `<div class="restaurant-info"><p><span>Delivery From: </span>${name}</p><p><span>${phoneNumber}</span></p><p>${streetAddress}</p><p>${city}, ${state} ${zipcode}</p></div>`
}

export function sendEmail (customerInfo, bag, tipAmount) {
  // emailjs.send('chouming3@gmail.com', 'chinesegrub', {
  //   'name': `${customerInfo.firstName} ${customerInfo.lastName}`,
  //   'email': customerInfo.email,
  //   'restaurant': bag.currentRestaurant.name,
  //   'details': emailCreator(customerInfo, bag, tipAmount)
  // })
  alert('email sent!!!')
}
