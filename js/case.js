function updateCaseQuantity(isIncrease){
    const caseQuantityField = document.getElementById('case-number');
    const caseQuantityString = caseQuantityField.value;
    let previousCaseQuantity = parseInt(caseQuantityString);
    let newCaseQuantity;
    if(isIncrease == true){
        newCaseQuantity = ++previousCaseQuantity;
    }else{
        newCaseQuantity = --previousCaseQuantity;
    }
    caseQuantityField.value = newCaseQuantity;
    return newCaseQuantity;
}

function updateCasePrice(newCaseQuantity){
    const caseTotalPrice = newCaseQuantity * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('case-plus').addEventListener('click', function(){
    const newCaseQuantity = updateCaseQuantity(true);
    updateCasePrice(newCaseQuantity);
})

document.getElementById('case-minus').addEventListener('click', function(){
    const newCaseQuantity = updateCaseQuantity(false);
    updateCasePrice(newCaseQuantity);
})