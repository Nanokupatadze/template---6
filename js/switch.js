function Switchi()
{
    let switchi = document.getElementById("switch").innerHTML;

    console.log(switchi);
    if(switchi == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
        document.getElementById("switch").innerHTML ='<i class="fa-solid fa-toggle-on"></i>';
        document.documentElement.style.setProperty('--surati','url(../img/blaku.jpg)');

        document.documentElement.style.setProperty('--svit','#fff');
    }
    else{
        document.getElementById("switch").innerHTML ='<i class="fa-solid fa-toggle-off"></i>';
        document.documentElement.style.setProperty('--surati','url(../img/write.jpg)');

        document.documentElement.style.setProperty('--svit','#000');
    }
}