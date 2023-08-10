import * as checker from "./checkPassword.js";
import * as modifier from "./modifyReq.js";

/*-----===VARIABLES===-----*/
var password = document.getElementById("pwgame-textarea");
var chrCounter = document.querySelector(".pwgame-counter h3");
var conditionClearCounter = 0;

password.addEventListener("input", () => {
    var passwordContent = password.value;
    console.log(passwordContent);
    console.log(conditionClearCounter);

    chrCounter.innerHTML = passwordContent.length;

    var state;
    var cleared = 0;

    var req1 = checker.checkReq1(passwordContent);
    if (req1) {
        if(cleared == 0){
            cleared = 1;
        }
        state = true;
        modifier.modifyReq1(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq1(state, cleared);
    }

    var req2 = checker.checkReq2(passwordContent);
    if (req2) {
        if(cleared == 1){
            cleared = 2;
        }
        state = true;
        modifier.modifyReq2(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq2(state, cleared);
    }

    var req3 = checker.checkReq3(passwordContent);
    if (req3) {
        if(cleared == 2){
            cleared = 3;
        }
        state = true;
        modifier.modifyReq3(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq3(state, cleared);
    }

    var req4 = checker.checkReq4(passwordContent);
    if (req4) {
        if(cleared == 3){
            cleared = 4;
        }
        state = true;
        modifier.modifyReq4(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq4(state, cleared);
    }

    var req5 = checker.checkReq5(passwordContent);
    if (req5) {
        if(cleared == 4){
            cleared = 5;
        }
        state = true;
        modifier.modifyReq5(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq5(state, cleared);
    }
    
    var req6 = checker.checkReq6(passwordContent);
    if (req6) {
        if(cleared == 5){
            cleared = 6;
        }
        state = true;
        modifier.modifyReq6(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq6(state, cleared);
    }

    var req7 = checker.checkReq7(passwordContent);
    if (req7) {
        if(cleared == 6){
            cleared = 7;
        }
        state = true;
        modifier.modifyReq7(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq7(state, cleared);
    }

    var req8 = checker.checkReq8(passwordContent);
    if (req8) {
        if(cleared == 7){
            cleared = 8;
        }
        state = true;
        modifier.modifyReq8(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq8(state, cleared);
    }

    var req9 = checker.checkReq9(passwordContent);
    if (req9) {
        if(cleared == 8){
            cleared = 9;
        }
        state = true;
        modifier.modifyReq9(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq9(state, cleared);
    }

    var req10 = checker.checkReq10(passwordContent);
    if (req10) {
        if(cleared == 9){
            cleared = 10;
        }
        state = true;
        modifier.modifyReq10(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq10(state, cleared);
    }
 
});