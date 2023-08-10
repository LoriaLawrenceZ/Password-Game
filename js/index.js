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
        state = true;
        cleared = 1;
        modifier.modifyReq1(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq1(state, cleared);
    }

    var req2 = checker.checkReq2(passwordContent);
    if (req2) {
        cleared = 2;
        modifier.modifyReq2(cleared);
    }

    var req3 = checker.checkReq3(passwordContent);
    if (req3) {
        cleared = 4;
        modifier.modifyReq3(cleared);
    }

    var req4 = checker.checkReq4(passwordContent);
    if (req4) {
        cleared = 5;
        modifier.modifyReq4(cleared);
    }

    var req5 = checker.checkReq5(passwordContent);
    if (req5) {
        cleared = 6;
        modifier.modifyReq5(cleared);
    }
    
    var req6 = checker.checkReq6(passwordContent);
    if (req6) {
        cleared = 7;
        modifier.modifyReq6(cleared);
    }

    var req7 = checker.checkReq7(passwordContent);
    if (req7) {
        cleared = 8;
        modifier.modifyReq7(cleared);
    }

    var req8 = checker.checkReq8(passwordContent);
    if (req8) {
        cleared = 9;
        modifier.modifyReq8(cleared);
    }

    var req9 = checker.checkReq9(passwordContent);
    if (req9) {
        cleared = 10;
        modifier.modifyReq9(cleared);
    }

    var req10 = checker.checkReq10(passwordContent);
    if (req10) {
        cleared = 11;
        modifier.modifyReq10(cleared);
    }    
});