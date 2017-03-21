/* global emailjs */

const emailCreator = (customerInfo, orderInfo, tipAmount) => {
  
}

const orderCreator = (bag) => {

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

export function sendEmail (customerInfo, orderInfo, tipAmount) {
  // emailjs.send('chouming3@gmail.com', 'chinesegrub', {
  //   'name': `${customerInfo.firstName} ${customerInfo.lastName}`,
  //   'email': customerInfo.email,
  //   'restaurant': orderInfo.currentRestaurant.name,
  //   'details': null
  // })
  console.log(arguments, 'this is arguments')
  let html = emailCreator(customerInfo, orderInfo, tipAmount)
  console.log(customerInfoCreator(customerInfo))
  console.log(Date().toString(), 'heres the date')
  console.log('this is the date time object', convertDateTime(Date().toString()))
}
