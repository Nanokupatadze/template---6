function calculate(btn) {

    // document.getElementById("ans").innerHTML = btn.innerHTML;
    let buttonvalue = btn.innerHTML;
    let answervalue = document.getElementById("answer").innerHTML;
    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;
    console.log(buttonvalue, answervalue, gamosaxuleba);



    if (answervalue == '0') {
        document.getElementById("answer").innerHTML = "";
    }
    if (gamosaxuleba == '0') {
        document.getElementById("gamosaxuleba").innerHTML = "";
    }

    document.getElementById("answer").innerHTML += buttonvalue;
    document.getElementById("gamosaxuleba").innerHTML += buttonvalue;

    let answerlength = document.getElementById("answer").innerHTML.length;

    if (answerlength >= 15) {
 let gilakebi = document.querySelectorAll(".calculate");
    console.log(gilakebi);

    gilakebi.forEach(element => {

        element.removeAttribute('onclick');
        console.log(element);
    });
    console.log(answerlength);
    }
   
}
