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