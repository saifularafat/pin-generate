
function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
    // console.log(random)
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if( pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


document.getElementById('btn-genetate-pin').addEventListener('click', function(){
   const pinCode = getPin();
    // console.log(pin)
    const displyField = document.getElementById('disply-field');
    displyField.value = pinCode;

})




document.getElementById('calculater').addEventListener('click', function(event){
    // thre time try korar pore input field none hoiya jabe
    // const errorThreTime = document.getElementById('error-3time').innerText;
    // if(parseInt(errorThreTime) >= 0){
    //     return;
    // }

    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-field');
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)){
        if( number === 'C'){
            typeNumberField.value = '';
        }
        else if( number === '<'){
            const digits = previousTypeNumber.split('');
                digits.pop('');
            const remaining = digits.join('');
            typeNumberField.value = remaining;
        }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    // console.log(number)
})


document.getElementById('btn-submit').addEventListener('click', function(){

    const displyFieldElement = document.getElementById('disply-field');
    const currentPin = displyFieldElement.value;

    const typeNumberFieldElement = document.getElementById('type-field');
    const typePin = typeNumberFieldElement.value;

    const successMessage = document.getElementById('pin-success');
    const faildMessage = document.getElementById('pin-failur');

    if( typePin === currentPin){
        successMessage.style.display = 'block';
        faildMessage.style.display = 'none';
    }
    else{
         
        // let errorHandler = document.getElementById('error-3time');

        // if(parseInt(errorHandler.innerText) <= 0){
        //     document.getElementById('type-field').setAttribute('disabled', true);
        //     return;
        // }
        // errorHandler.innerText = parseInt(errorHandler.innerText) - 1;

        faildMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})