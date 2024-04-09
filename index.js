// DROPDOWN 
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


// PLACE ORDER BUTTON
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let anyFieldEmpty = false;
    const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');

    // Check if any input field is empty
    inputFields.forEach(function(inputField) {
        if (inputField.value.trim() === '') {
            anyFieldEmpty = true;
        }
    });

    const cuisineField = document.querySelector('#cuisine');
    const paymentMethodField = document.querySelector('#modeOfPayment');

    // Check if cuisineField or paymentMethodField is not selected
    if (cuisineField.value === '' || paymentMethodField.value === '' || anyFieldEmpty) {
        alert("Error: Please fill out all required fields.");
    } else {
        window.location.href = "op.html";
    }
});





// CANCEL ORDER BUTTON
function cancelOrder() {
    
    document.getElementById('selectedCuisine').innerText = 'Choose Cuisine';
    document.getElementById('cuisine').value = '';

    document.getElementById('selectedMop').innerText = 'Choose Payment Method';
    document.getElementById('modeOfPayment').value = '';

    
    document.getElementById('dineInTakeOut').selectedIndex = 0;

   
    document.getElementById('comments').value = '';

    document.getElementById('orderPlaced').checked = false;
}



