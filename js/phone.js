function updatePhoneQuantity(isIncrease){
    const phoneQuantityField = document.getElementById('phone-number');
    const phoneQuantityString = phoneQuantityField.value;
    let previousPhoneQuantity = parseInt(phoneQuantityString);
    let newPhoneQuantity;
    if(isIncrease == true){
        newPhoneQuantity = ++previousPhoneQuantity;
    }else{
        newPhoneQuantity = --previousPhoneQuantity;
    }
    phoneQuantityField.value = newPhoneQuantity;
    return newPhoneQuantity;
}

function updatePhonePrice(newPhoneQuantity){
    const phoneTotalPrice = newPhoneQuantity * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(true);
    updatePhonePrice(newPhoneQuantity)
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(false);
    updatePhonePrice(newPhoneQuantity)
})