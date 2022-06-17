/*
//funciones.....
let p1 = 1
let p2 = 10

function suma(p1,p2){
    return p1 +p2
}
console.log(suma(p1,p2))

function resta(p1,p2){
    resultado= p1 - p2
    console.log(resultado)
}

resta(p1,p2)

//objet....
console.warn("objetos")

const car = {tipo:"marca", color:"rojo", peso:200, ruedas:4}

console.log(car.tipo)

//caden do text
let cadena = "hello Mundo"
console.log(typeof(cadena))//tipo de dato
console.log(cadena.length)//longitud
let text = "hello work, I like cooking and runing"
let caden = new String(text)
console.log(caden.slice(3,10)) //substring -solo positive

//number....
let x = 0.3
let y = 3
let result = x+y
console.log(result)

//convertir un strig a un number
let lista = {curso_id:"10", nombre:"python"}
curso_id = parseInt(lista.curso_id)

console.log(typeof(curso_id))

//matrices.....
console.warn("matrices....")
const numeros = ["uno", "dos", "tres", "cuatro", "cinco", "six"]
numeros[0] = "mybach"
let longitud = numeros.length

for (let i = 0; i < longitud; i++){
    console.log(i)
}
//frutas.....
const fruits = new Map([
    ["mandaruna", 300],
    ["mandioca", 500],
    ["manzana", 600]

  ]);
for (const fruta of fruits){
    console.log(fruta[0])
}
*/

//practica1.....
let n = [1, 2, 3, 4 ,5 ,6 ,7, 8, 9, 10, 11, 12, 13, 14, 15]

let pares = []
let impares = []
for (let i = 0; i = n.length; i++){
    if(i % 2 == 0){
        pares.push(i)
    } else {
        impares.push(i)
    };
};
document.write("los numeros impares son " + pares + "<br>")

