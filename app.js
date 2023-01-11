function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


document.getElementById('case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
})

document.getElementById('case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
})