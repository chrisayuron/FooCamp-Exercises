function fillArray(a,b){
    let array=[];
for(i=a;i<=b;i++)
    array.push(i);
    return array;
}

const numericArray = fillArray(1, 10);
console.log(numericArray);


function recorrer(numericArray){
    let array=[];
    array=numericArray.map(item=>{
        if(item%3==0 && item%5==0)
        return 'FizzBuzz'
        else if(item%3==0 &&item%5!=0)
        return 'Fizz'
        else if(item%3!=0 &&item%5==0)
        return 'Buzz'
        else
        return item
    })
    return array
}

const fizzBuzzArray=recorrer(numericArray)
console.log(fizzBuzzArray)

function mostrar(datos){
    alert(`Hola mi nombre es ${datos.nombre}, tengo ${datos.edad} años, mido ${datos.altura}cm, estudié ${datos.profesion} mi color favorito es el ${datos.colorfavorito} y mis hobbies son ${datos.hobbies.join(", ")}`)
}
const datos={
    nombre:'Ronald',
    edad:35,
    profesion:'Tecnológo en Sistemas',
    colorfavorito:'Morado',
    altura:1.78,
    hobbies:['ver anime','jugar voleyball','hacer sopas de letras']
}

mostrar(datos)

