//var btn= document.querySelector("button")
//btn.onclick= console.log("click!") 

//function foo(){
//console.log("click")
//}
//btn.onclick = function(){
//    console.log("click anonimo")
//}
// callback

//var uno = () => {
//    console.log("funcion uno")
//}
//var dos = () => {
//    console.log("funcion dos")
//}

//function ffo(item,callback){
//    console.log(item)
//    callback()
//}
// Eventos html y el DOM

//var btn = document.getElementById("btn")
//btn.onclick = console.log("click")



// API Web EventTarget

var btn =document.getElementById("btn")

var num= () =>{
    console.log("num")
}
var num2= () =>{
    console.log("num2")
}

//btn.onclick = num2
btn.addEventListener("click",num)
btn.addEventListener("click",num2)


//objeto Event
console.warn("obj event")


//btn.addEventListener("click",function(e){
//    console.log(e)
//})

//corporation automatic


window.document.getElementById("encabezado").innerHTML +=" Avanzado"


let hdos = document.getElementsByTagName("h2")
console.log(hdos)
hdos[0].innerHTML += " !!!!"

let tres = document.querySelectorAll("h3")

tres[0].innerHTML += "nuevo agregado" 

/*formulario..........
let form = document.getElementById("formulario");
let botonn = document.getElementById("boton");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("click")
})
*/
const validator = document.querySelector("#validation")
validator.addEventListener("submit", e => {
    e.preventDefault()
    e.stopPropagation()

    let name = e.target[1]
    
    console.log(name.checkValidity())
    console.log(name.validity)
})






