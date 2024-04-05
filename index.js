function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId).querySelector('.dropdown-content');
    dropdownContent.classList.toggle('open');
}

function selectCuisine(event) {
    event.preventDefault();
    var cuisine = event.target.getAttribute('data-value');
    document.getElementById('selectedCuisine').innerText = event.target.innerText;
    document.getElementById('cuisine').value = cuisine;
    toggleDropdown('cuisineDropdown');
}

function selectedMop(event) {
    event.preventDefault();
    var modeOfPayment = event.target.getAttribute('data-value');
    document.getElementById('selectedMop').innerText = event.target.innerText;
    document.getElementById('modeOfPayment').value = modeOfPayment;
    toggleDropdown('paymentDropdown');
}

const placeOrderButton = document.querySelector('button[type="submit"]');
placeOrderButton.addEventListener('click', function(event) {
    alert("Order placed!");
});



function cancelOrder() {
    
    document.getElementById('selectedCuisine').innerText = 'Choose Cuisine';
    document.getElementById('cuisine').value = '';

    document.getElementById('selectedMop').innerText = 'Choose Payment Method';
    document.getElementById('modeOfPayment').value = '';

    
    document.getElementById('dineInTakeOut').selectedIndex = 0;

   
    document.getElementById('comments').value = '';

    document.getElementById('orderPlaced').checked = false;
}


