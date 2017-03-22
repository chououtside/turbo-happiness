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

const emailCreator = (customerInfo, orderInfo, tipAmount) => {
  
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
  //   'details': null
  // })
  console.log(arguments, 'this is arguments')
  let html = emailCreator(customerInfo, bag, tipAmount)
  console.log(customerInfoCreator(customerInfo))
  console.log(Date().toString(), 'heres the date')
  console.log('this is the date time object', convertDateTime(Date().toString()))
  console.log('this is the header object', headerCreator())
  console.log('this is table rows', itemBreakdown(bag.items))
}
