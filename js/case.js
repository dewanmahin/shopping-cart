function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number');
    const caseNumberString = caseNumberField.value;
    let previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = ++previousCaseNumber;
    }else{
        newCaseNumber = --previousCaseNumber;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
})

document.getElementById('case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
})