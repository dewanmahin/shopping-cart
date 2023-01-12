document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneQuantityField = document.getElementById('phone-number');
    const phoneQuantityString = phoneQuantityField.value;
    let previousPhoneQuantity = parseInt(phoneQuantityString);
    const newPhoneQuantity = ++previousPhoneQuantity;
    phoneQuantityField.value = newPhoneQuantity;
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneQuantityField = document.getElementById('phone-number');
    const phoneQuantityString = phoneQuantityField.value;
    let previousPhoneQuantity = parseInt(phoneQuantityString);
    const newPhoneQuantity = --previousPhoneQuantity;
    phoneQuantityField.value = newPhoneQuantity;
})