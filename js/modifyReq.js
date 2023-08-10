/*-----===VARIABLES===-----*/
var req1 = document.getElementById("req1");
var req2 = document.getElementById("req2");
var req3 = document.getElementById("req3");
var req4 = document.getElementById("req4");
var req5 = document.getElementById("req5");
var req6 = document.getElementById("req6");
var req7 = document.getElementById("req7");
var req8 = document.getElementById("req8");
var req9 = document.getElementById("req9");
var req10 = document.getElementById("req10");


/*-----===FUNCTIONS===-----*/
export function modifyReq1(state, cleared){
    if(state == true){
        req1.classList.remove("req-container-incomplete");
        req1.classList.add("req-container-complete");
    }
    else{
        req1.classList.remove("req-container-complete");
        req1.classList.add("req-container-incomplete");
    }

    if (cleared >= 1) {
        req2.classList.remove("disabled");
        req2.classList.add("active");
        return 1;
    }
}

export function modifyReq2(state, cleared){
    if(state == true){
        req2.classList.remove("req-container-incomplete");
        req2.classList.add("req-container-complete");
    }
    else{
        req2.classList.remove("req-container-complete");
        req2.classList.add("req-container-incomplete");
    }

    if (cleared >= 2) {
        req3.classList.remove("disabled");
        req3.classList.add("active");
        return 2;
    }
}

export function modifyReq3(state, cleared){
    if(state == true){
        req3.classList.remove("req-container-incomplete");
        req3.classList.add("req-container-complete");
    }
    else{
        req3.classList.remove("req-container-complete");
        req3.classList.add("req-container-incomplete");
    }

    if (cleared >= 3) {
        req4.classList.remove("disabled");
        req4.classList.add("active");
        return 3;
    }
}

export function modifyReq4(state, cleared){
    if(state == true){
        req4.classList.remove("req-container-incomplete");
        req4.classList.add("req-container-complete");
    }
    else{
        req4.classList.remove("req-container-complete");
        req4.classList.add("req-container-incomplete");
    }

    if (cleared >= 4) {
        req5.classList.remove("disabled");
        req5.classList.add("active");
        return 4;
    }
}

export function modifyReq5(state, cleared){
    if(state == true){
        req5.classList.remove("req-container-incomplete");
        req5.classList.add("req-container-complete");
    }
    else{
        req5.classList.remove("req-container-complete");
        req5.classList.add("req-container-incomplete");
    }

    if (cleared >= 5) {
        req6.classList.remove("disabled");
        req6.classList.add("active");
        return 5;
    }
}

export function modifyReq6(state, cleared){
    if(state == true){
        req6.classList.remove("req-container-incomplete");
        req6.classList.add("req-container-complete");
    }
    else{
        req6.classList.remove("req-container-complete");
        req6.classList.add("req-container-incomplete");
    }

    if (cleared >= 6) {
        req7.classList.remove("disabled");
        req7.classList.add("active");
        return 6;
    }
}

export function modifyReq7(state, cleared){
    if(state == true){
        req7.classList.remove("req-container-incomplete");
        req7.classList.add("req-container-complete");
    }
    else{
        req7.classList.remove("req-container-complete");
        req7.classList.add("req-container-incomplete");
    }

    if (cleared >= 7) {
        req8.classList.remove("disabled");
        req8.classList.add("active");
        return 7;
    }
}

export function modifyReq8(state, cleared){
    if(state == true){
        req8.classList.remove("req-container-incomplete");
        req8.classList.add("req-container-complete");
    }
    else{
        req8.classList.remove("req-container-complete");
        req8.classList.add("req-container-incomplete");
    }

    if (cleared >= 8) {
        req9.classList.remove("disabled");
        req9.classList.add("active");
        return 8;
    }
}

export function modifyReq9(state, cleared){
    if(state == true){
        req9.classList.remove("req-container-incomplete");
        req9.classList.add("req-container-complete");
    }
    else{
        req9.classList.remove("req-container-complete");
        req9.classList.add("req-container-incomplete");
    }

    if (cleared >= 9) {
        req10.classList.remove("disabled");
        req10.classList.add("active");
        return 9;
    }
}

export function modifyReq10(state, cleared){
    if(state == true){
        req10.classList.remove("req-container-incomplete");
        req10.classList.add("req-container-complete");
    }
    else{
        req10.classList.remove("req-container-complete");
        req10.classList.add("req-container-incomplete");
    }

    if (cleared >= 10) {
        return 10;
    }
}