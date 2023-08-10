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

function checkReq3(pw) {
}

function checkReq4(pw) {
}

function checkReq5(pw) {
}

function checkReq6(pw) {
}

function checkReq7(pw) {
}

function checkReq8(pw) {
}

function checkReq9(pw) {
}

function checkReq10(pw) {
}