

function calculadora(num1,num2,op){
    switch (op){
        case '+': return num1+num2;
        case '-': return num1-num2;
        case '*': return num1*num2;
        case '/': return num1/num2;
        default : return NaN;
    }
}


function montarFormula(num1,num2,op){
    let isNum1Valid = (typeof num1 == 'number');
    let isNum2Valid = (typeof num2 == 'number');
    let isOpValid = (!((op==='/')&&(num2==0)))&&((op==='+')||(op==='-')||(op==='*')||(op==='/'));
    if (!isNum1Valid||!isNum2Valid||!isOpValid){
        return {        
            result: NaN,
            msg: 'Valores inválidos!',
        };
    }

    const resultado = calculadora(num1,num2,op);
    return {        
        result: resultado,
        msg: num1+' '+op+' '+num2+' = '+resultado,
    };
}

console.log(montarFormula(10,5,'+'));
console.log(montarFormula(12,7,'+'));

console.log(montarFormula(10,5,'-'));
console.log(montarFormula(12,7,'-'));

console.log(montarFormula(10,5,'*'));
console.log(montarFormula(12,7,'*'));

console.log(montarFormula(10,5,'/'));
console.log(montarFormula(12,7,'/'));


console.log(montarFormula(12,0,'/'));
console.log(montarFormula(12,2,'X'));
console.log(montarFormula(12,'A','+'));