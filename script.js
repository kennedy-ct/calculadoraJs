window.onload = function loadVariable(){
    let operation = document.getElementById('operation');
    let showResult = document.getElementById('result');
}
let firstValue = '';
let secondValue = '';
let percOperation = '';
function writeOperation(value){
    if(operation.innerText.length > 20) operation.innerText = operation.innerText.substring(0,20);
    let showResult = document.getElementById('result');
    calcResult = '';
    
    if(value == 'clear'){
        operation.innerHTML = " ";
        showResult.innerText = "0"; 

    }
    else if(value == '²'){
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + '²';
        }
        else{
            operation.innerHTML = operation.innerText + '²';
        }
        
    }
    else if(value == '%'){
        firstValue = '';
        secondValue = '';
        percOperation = '';
        let i = 0;
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + ' % ';   
        }
        else{
            operation.innerHTML = operation.innerText + ' % ';
        }
        while(!isNaN(operation.innerText[i])){
            firstValue = firstValue + operation.innerText[i];
            i++;
        }
        percOperation = operation.innerText[i];
        i++; 
        i++;
        while(!isNaN(operation.innerText[i])){
            secondValue = secondValue + operation.innerText[i];
            i++;
        }
    }
    else if(value == '÷'){
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + ' ÷ ';
        }
        else{
            operation.innerHTML = operation.innerText + ' ÷ ';
        }
    }
    else if(value == '×'){
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + ' × ';
        }
        else{
            operation.innerHTML = operation.innerText + ' × ';
        }
    }
    else if(value == '-'){
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + ' - ';
        }
        else{
            operation.innerHTML = operation.innerText + ' - ';
        }
    }
    else if(value == '+'){
        if(isNaN(operation.innerText[operation.innerText.length - 1])){
            operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
            operation.innerHTML = operation.innerText + ' + ';
        }
        else{
            operation.innerHTML = operation.innerText + ' + ';
        }
    }
    else if(value == 'del'){
        operation.innerHTML = operation.innerText.substring(0, operation.innerText.length - 1);
    }
    else if(value == '='){
        let resultOfPercentage = '';
        if(operation.innerText[operation.innerText.length - 1] == '%'){
            if(percOperation == '-'){
                resultOfPercentage = parseInt(firstValue) - (parseInt(firstValue/100)*parseInt(secondValue));
                showResult.innerText = resultOfPercentage;
                operation.innerHTML = resultOfPercentage;
            }
            if(percOperation == '+'){
                console.log(resultOfPercentage);
                resultOfPercentage = parseInt(firstValue) + (parseInt(firstValue/100)*parseInt(secondValue));
                showResult.innerText = resultOfPercentage;
                operation.innerHTML = resultOfPercentage;
            }
            if(percOperation == '×'){
                resultOfPercentage = parseInt(firstValue) * (parseInt(firstValue/100)*parseInt(secondValue));
                showResult.innerText = resultOfPercentage;
                operation.innerHTML = resultOfPercentage;
            }
            if(percOperation == '÷'){
                resultOfPercentage = parseInt(firstValue) / (parseInt(firstValue/100)*parseInt(secondValue));
                showResult.innerText = resultOfPercentage;
                operation.innerHTML = resultOfPercentage;
            }
        }
        else{
            calcResult = operation.innerText.replace(/\s+/g, '').replace("×", '*').replace("÷", '/').replace("²", "**2");
            showResult.innerText = eval(calcResult);
            operation.innerHTML = eval(calcResult);
        }
    }
    else if(value == '·'){
        operation.innerHTML = operation.innerText + '.';
    }
    else{
        if(isNaN(operation.innerText[operation.innerText.length - 1]) && operation.innerText[operation.innerText.length - 1] != '.'){
            operation.innerHTML = operation.innerText + " " + value;
        }
        else{
            operation.innerHTML = operation.innerText + value;
        }
    }
}

