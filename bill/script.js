// script.js
const addProductButton = document.getElementById('add-product');
const generateReceiptButton = document.getElementById('generate-receipt');
const receiptOutput = document.getElementById('receipt-output');
const productList = document.getElementById('product-list');

let products = [];

addProductButton.addEventListener('click', () => {
    const productName = document.querySelector('.product-name').value;
    const totalMoney = document.querySelector('.total-money').value;
    const numMembers = document.querySelector('.num-members').value;

    if (productName && totalMoney && numMembers) {
        products.push({ productName, totalMoney, numMembers });

        // Clear input fields
        document.querySelector('.product-name').value = '';
        document.querySelector('.total-money').value = '';
        document.querySelector('.num-members').value = '';

        // Update the product list
        updateProductList();
    }
});

generateReceiptButton.addEventListener('click', () => {
    if (products.length > 0) {
        generateReceipt();
    }
});

function updateProductList() {
    // Clear the existing product list
    productList.innerHTML = '';

    // Create and append a new list of added products
    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Product ${index + 1}:</strong> ${product.productName}, 
            <strong>Total Money:</strong> ${product.totalMoney}, 
            <strong>No. Members:</strong> ${product.numMembers}
        `;
        productList.appendChild(listItem);
    });
}

function generateReceipt() {
    const receiptTable = document.createElement('table');
    receiptTable.classList.add('invoice-table');
    receiptTable.innerHTML = `
    <thead>
    <tr>
      <td>PRODUCT</td>
      <td>TOTAL AMOUNT</td>
      <td>PAYABLE</td>
    </tr>
  </thead>
    `;

    let grandTotal = 0;

    products.forEach((product) => {
        const amountPerMember = (product.totalMoney / product.numMembers).toFixed(2);
        grandTotal += parseFloat(amountPerMember);

        const row = document.createElement('tr');
        row.classList.add('row-data');
        row.innerHTML = `
            <td> ${product.productName}</td>
            <td> ₹ ${product.totalMoney}</td>
            <td> ₹ ${amountPerMember}</td>
        `;

        receiptTable.appendChild(row);
    });

    const receiptNumber = Math.floor(Math.random() * 900000) + 100000;
    const currentDate = new Date().toLocaleDateString();

    const receiptHTML = `
            <div class="invoice-card">
            <div class="invoice-title">
            <div id="main-title">
                <h4>INVOICE</h4>
                <span>#${receiptNumber}</span>
            </div>
            <span id="date"> ${currentDate}</span>
            </div>
            <div class="invoice-details">
        ${receiptTable.outerHTML}
        </div>
        <div class="invoice-footer">
        <p class="btn btn-secondary" id="later">Grand Total</p>
        <p class="btn btn-primary">₹ ${grandTotal.toFixed(2)}</p>
      </div>
      </div>
    `;
    receiptOutput.innerHTML = receiptHTML;
    receiptOutput.style.display = 'block';
    // Get the receipt container element
    const receiptContainer = document.querySelector('.invoice-card');

    // Use html2canvas library to convert the receipt container to an image
 // Capture the receipt container as an image using html2canvas
html2canvas(receiptContainer).then(function (canvas) {
    // Create a data URL for the image
    const imageDataURL = canvas.toDataURL('image/png');

    // Create a temporary anchor element for downloading the image
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;
    downloadLink.download = "receipt.png"; // Set the desired file name
    downloadLink.style.display = "none"; // Hide the link

    // Add the link to the document and trigger a click event to initiate the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
    const whatsappMessage = `Your bill receipt is ready for ₹${grandTotal.toFixed(2)}. Pay using this link: https://pay.upilink.in/pay/9188462190@hdfcbank?am=${grandTotal.toFixed(2)}`;
    const whatsappLink = `whatsapp://send?text=${whatsappMessage}&data=${imageDataURL}`;
    // Open WhatsApp with the image and message
    window.location.href = whatsappLink;
});

}
