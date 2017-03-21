/* global emailjs */

const emailCreator = function(customerInfo, orderInfo, tipAmount) {
  
}

const orderCreator = function(bag) {

}

const customerInfoCreator = function (customerInfoObject) {
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


export function sendEmail (customerInfo, orderInfo, tipAmount) {
  emailjs.send('chouming3@gmail.com', 'chinesegrub', {
    'name': `${customerInfo.firstName} ${customerInfo.lastName}`,
    'email': customerInfo.email,
    'restaurant': orderInfo.currentRestaurant.name,
    'details': null
  })
  console.log(arguments, 'this is arguments')
  let html = emailCreator(customerInfo, orderInfo, tipAmount)
  console.log(customerInfoCreator(customerInfo))
}
