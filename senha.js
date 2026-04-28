/*
    VALIDADOR DE SENHA
*/


function validarSenha(senha){
    if (typeof senha != 'string'){
        return {
            ok : false,
            msg: 'Deve ser uma "string"'
        };
    }
    const minLen = senha.length >= 8;
    const maxLen = senha.length <= 64;
    const temMaius = /[A-Z]/.test(senha);
    const temMinus = /[a-z]/.test(senha);
    const temNum = /[0-9]/.test(senha);
    const temEsp = /[!@*%$]/.test(senha);
    const temEspaco = !/[\s]/.test(senha);//nao tem espaço

    const ok = minLen && 
                maxLen && 
                temMaius && 
                temMinus && 
                temNum && 
                temEsp && 
                temEspaco;    
    return {
        ok : ok,
        msg: ok ? 'Senha forte!' : 'Senha fraca!'
    };    
}

console.log(validarSenha(null));
console.log(validarSenha('Davi'));
console.log(validarSenha('Davi12'));
console.log(validarSenha('Davi12@'));
console.log(validarSenha('Davi12@O'));


