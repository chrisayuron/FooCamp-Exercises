let num=Math.floor(Math.random()*(100-1)+1)
let valor=0;
do{
valor=prompt("Digita un número")
if(valor>num){
alert("Te pasaste")
} else if(valor<num){
    alert("Te faltó")
}else{
    alert("Adivinaste")
}
}while(num!=valor);