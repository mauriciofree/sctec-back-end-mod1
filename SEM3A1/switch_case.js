const dia = 6;
let nome;
switch (dia){
    case 1: nome = 'Seg'; break;
    case 2: nome = 'Ter'; break;
    case 3: nome = 'Qua'; break;
    case 4: nome = 'Qui'; break;
    case 5: nome = 'Sex'; break;
    case 6: 
    case 7: nome = 'Fim de Semana'; break;
    default: nome = 'Inválido';
}

console.log(nome);

const nivelAcesso = 'ADMIN';
switch(nivelAcesso){
    case 'USER':
        //logica do perfil
        console.log('Acessando rota do user');
        break;
    case 'ADMIN':
        //logica do perfil
        console.log('Acessando rota do admin');
        break;
    default:
        //logica do perfil
        console.log('Acessando rota global');    
}

function nomeMes(n){
    switch (n){
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return 'Inválido';
    }
}

console.log(nomeMes(3));