var incrementButton = document.getElementById('click1');
var decrementButton = document.getElementById('click2');

var valore = 0;

document.getElementById("click1").addEventListener("click", function(){
    valore++;
    document.getElementById('x').textContent = valore;
});

document.getElementById('click2').addEventListener('click', function(){

    if(valore>0){
    valore--;
    document.getElementById('x').textContent = valore;
    }

    else{
        alert("Impossibile decrementare");
    }
});

