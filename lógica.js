function insert(num) { 
   let num1=document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML=num1+num
}
function clean() {
    document.getElementById('resultado').innerHTML='';
}
function back() {
    let back=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = back.substring(0, back.length -1);
}
function calcular() {
    let resultado=document.getElementById('resultado').innerHTML
    if (resultado) {
        document.getElementById('resultado').innerHTML=eval(resultado);
    }
}
