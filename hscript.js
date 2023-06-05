function submitForm(event) {

  event.preventDefault(); // Prevent form submission

  // Get input values

  var name = document.getElementById('name').value;

  var phone = document.getElementById('phone').value;

  var address = document.getElementById('address').value;

  var quantity = document.getElementById('quantity').value;

  // Create order object

  var order = {

    name: name,

    phone: phone,

    address: address,

    quantity: quantity

  };

  // Send order details to the server (address.json file in this case)

  sendOrder(order);

}

function sendOrder(order) {

  // Convert order object to JSON string

  var orderJSON = JSON.stringify(order);

  // Send an AJAX request to the server

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'address.json', true);

  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {

      alert('Order submitted successfully.');

      // You can perform additional actions here, such as showing a success message

    }

  };

  xhr.send(orderJSON);

}

