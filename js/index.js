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
        cleared++;
        modifier.modifyReq2(cleared);
    }

    var req3 = checker.checkReq3(passwordContent);
    if (req3) {
        cleared++;
        modifier.modifyReq3(cleared);
    }

    var req4 = checker.checkReq4(passwordContent);
    if (req4) {
        cleared++;
        modifier.modifyReq4(cleared);
    }

    var req5 = checker.checkReq5(passwordContent);
    if (req5) {
        cleared++;
        modifier.modifyReq5(cleared);
    }
    
    var req6 = checker.checkReq6(passwordContent);
    if (req6) {
        cleared++;
        modifier.modifyReq6(cleared);
    }

    var req7 = checker.checkReq7(passwordContent);
    if (req7) {
        cleared++;
        modifier.modifyReq7(cleared);
    }

    var req8 = checker.checkReq8(passwordContent);
    if (req8) {
        cleared++;
        modifier.modifyReq8(cleared);
    }

    var req9 = checker.checkReq9(passwordContent);
    if (req9) {
        cleared++;
        modifier.modifyReq9(cleared);
    }

    var req10 = checker.checkReq10(passwordContent);
    if (req10) {
        cleared++;
        modifier.modifyReq10(cleared);
    }    
});