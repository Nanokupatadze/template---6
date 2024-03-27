function operator(op){
console.log(op.innerHTML);
let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;
console.log(gamosaxuleba);

gamosaxuleba += op.innerHTML;
document.getElementById("gamosaxuleba").innerHTML = gamosaxuleba;
let bolo = gamosaxuleba[gamosaxuleba.length -1];
console.log(bolo);

if(bolo== '%' || bolo =='÷' || bolo =='×'|| bolo == '-' || bolo =='+'){

    console.log(gamosaxuleba[gamosaxuleba.length -1]);
    gamosaxuleba[gamosaxuleba.length -1] = ' ';
}
}