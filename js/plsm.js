let plsm = () =>{
    let number = document.getElementById("answer").innerHTML;
    console.log(number);

    // let plus = "+", minus = "-";
    if(number  >0){
        document.getElementById("answer").innerHTML = '-'+number;
    }
    else{

        let pirvsim = number.slice(0,1);
        console.log(pirvsim);
        let darchenili = number.slice(1, number.length);
        console.log(darchenili);
        document.getElementById("answer")
    }
}