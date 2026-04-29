
function calcularIMC(alt,peso){
    return peso/(alt**2);
}

function avaliaIMC(alt,peso){
    let isPesoValid = (typeof peso == 'number') && (peso>0&&peso<300);
    let isAlturaValid = (typeof alt == 'number') && (alt>0&&alt<4);
    if (!(isPesoValid&&isAlturaValid)){
        return {
            result : null,
            msg : 'Valores inválidos! Insira valores corretos!'
        };
    }
    let imc = calcularIMC(alt,peso).toFixed(1);
    let msg = '';


    if (imc>40){
        msg = 'Obesidade Grau III';
    }else if (imc>35){
        msg = 'Obesidade Grau II';
    }else if (imc>30){
        msg = 'Obesidade Grau I';
    }else if (imc>25){
        msg = 'Sobrepeso';
    }else if (imc>18.5){
        msg = 'Peso Normal';
    }else{
        msg = 'Abaixo do Peso';
    }   
    return {
        result: imc,
        msg : msg
    };
}

console.log(avaliaIMC(1.80,180));
console.log(avaliaIMC(1.80,70));
console.log(avaliaIMC(1.80,55));
console.log(avaliaIMC(1.80,355));
console.log(avaliaIMC(1.80,'A'));
