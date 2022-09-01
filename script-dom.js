console.log("Hola! estamos conectados para practicar")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document. getElementById("pid")
const input = document.querySelector ("input")

const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn=document.querySelector("#botonCalcular")
const pResult = document.querySelector("#result")

const form = document.querySelector("formulario")

btn.addEventListener("click", botonClickear)

function botonClickear (){

    const sumaInputs = parseInt(input1.value)+ parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

console.log({

    h1,
    p,
    parrafito,
    pid,
    input
})


h1.innerHTML = "patito </br> Feito"
h1.classList.add("rojo");
h1.classList.remove("verde")
//h1.classList.toggle("verde")
//h1.classList.contains("verde")

input.value ="escribir"

const img = document.createElement("img")
img.setAttribute("src", "http://lasanantonioestancia.com.ar/wp-content/uploads/2021/01/cropped-logo-174x103.jpg")
console.log(img)
pid.innerHTML = ""
pid.append(img)