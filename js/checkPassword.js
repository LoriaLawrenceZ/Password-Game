/*-----===FUNCTIONS===-----*/
export function checkReq1(pw) {
    if(pw.length >= 8){
        return true;
    }
    else{
        return false;
    }
}

export function checkReq2(pw) {
    let regex = /[a-zA-Z]/g;
    let letras = pw.match(regex);

    if(letras && letras.length >= 6){
        return true;
    }
    else{
        return false;
    }
}

export function checkReq3(pw) {
    let regex = /\d/g;
    let digitos = pw.match(regex);
    let soma = 0;

    if(digitos === null){
        return false;
    }
    else{
        for (let index = 0; index < digitos.length; index++) {
            soma += parseInt(digitos[index]);      
        }

        if(soma >= 22){
            return true;
        }
        else{
            return false;
        }
    }
        
}

export function checkReq4(pw) {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let caracteresEspeciais = pw.match(regex);

    if(caracteresEspeciais && caracteresEspeciais.length >= 4){
        return true;
    }
    else{
        return false;
    }
}

export function checkReq5(pw) {
    let paises = ["argentina", "bolívia", "brasil", "chile", "colômbia", "equador", "guiana", "frança", "paraguai", "peru", "suriname", "uruguai", "venezuela"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}

export function checkReq6(pw) {
}

export function checkReq7(pw) {
}

export function checkReq8(pw) {
}

export function checkReq9(pw) {
}

export function checkReq10(pw) {
}