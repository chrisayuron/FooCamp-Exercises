//RONALD ROJAS NEWBALL */

let num=Math.floor(Math.random()*(10000-1000))+1000;
num=num.toString();
console.log(num);
let picas,fijas;
do{
    picas=0;
    fijas=0;
    let val=prompt("Digita un número");
    while(val==null || val.length!=4){
        alert("Se digitó un valor incorrecto");
        val=prompt("Digita un número");
    }
    console.log(`Valor escrito por mi ${val}`);

    for(let i=0;i<num.length;i++){
    if(num[i]==val[i]){
    fijas++
    }
    // for(let j=0;j<num.length;j++){
    //     if(num[i]!=val[i] && num[i]==val[j]){
    //         picas++
    //     }
    // }
    }
    if((num[0]!=val[0]) && (num[0]==val[1] ||num[0]==val[2] ||num[0]==val[3]) ){
        picas++
    }
    if((num[1]!=val[1]) && (num[1]==val[0] ||num[1]==val[2] ||num[1]==val[3]) ){
        picas++
    }
    if((num[2]!=val[2]) && (num[2]==val[0] ||num[2]==val[1] ||num[2]==val[3]) ){
        picas++
    }
    if((num[3]!=val[3]) && (num[3]==val[0] ||num[3]==val[1] ||num[3]==val[2]) ){
        picas++
    }

if(fijas!=4){
alert(`Tienes ${picas} picas y ${fijas} fijas **`)
}
}while(fijas!=4)
alert("Acertaste")