// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const price = parseFloat(priceElement.innerHTML);

  const quantityElement = product.querySelector('.quantity input');
  const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2);

  return subtotal;

  
  
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test



  // ITERATION 2
  const products = document.getElementsByClassName('product');

  let total = 0;
  
  for (const product of products) {
    total += updateSubtotal(product); 
  }



  // ITERATION 3
  const totalElement = document.getElementById('total-value');
  totalElement.innerHTML = `Total: $<span>${total.toFixed(2)}</span>`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = target.parentNode.parentNode;

  
  productToRemove.parentNode.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
 
  const nameInput = document.getElementById('new-product-name');
  const priceInput = document.getElementById('new-product-price');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value); 

 
  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');

  
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  newProductRow.appendChild(nameCell);

 
  const priceCell = document.createElement('td');
  priceCell.textContent = `$${price.toFixed(2)}`; 
  newProductRow.appendChild(priceCell);

  
  const quantityCell = document.createElement('td');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = 0;
  quantityInput.value = 1;
  quantityCell.appendChild(quantityInput);
  newProductRow.appendChild(quantityCell);

 
  const subtotalCell = document.createElement('td');
  const subtotalSpan = document.createElement('span');
  subtotalSpan.id = `product-${name}-subtotal`; 
  subtotalSpan.textContent = '0.00';
  subtotalCell.appendChild(subtotalSpan);
  newProductRow.appendChild(subtotalCell);

  
  const removeCell = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn-remove');
  removeButton.textContent = 'Remove';
  removeCell.appendChild(removeButton);
  newProductRow.appendChild(removeCell);

 
  removeButton.addEventListener('click', removeProduct);

 
  const tableBody = document.querySelector('table tbody'); 
  tableBody.appendChild(newProductRow);

  
  nameInput.value = '';
  priceInput.value = '';

  
  updateSubtotal(newProductRow); 

  calculateAll(); 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductButton = document.getElementById('create-product-button'); // Modify ID if needed
  createProductButton.addEventListener('click', createProduct);
});
