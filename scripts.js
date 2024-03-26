

console.log(document.getElementById('gen-1'));

const h2gen =document.getElementById('gen-1')
h2gen.innerText="Generasión 1 Pokimon";

// EJERCICIO2

const gen1fcont =document.querySelector('.infocard-list')
console.log(document.querySelector(".infocard-list"))


gen1fcont.style.background = "pink";

// EJERCICIO 3 - 4

console.log("mostrar URL=", document.URL);
console.log("Mosrar dominio=", document.domain);

// EJERCICIO 5 - 6

console.log("nodos", document.querySelectorAll("img"));

console.log("imgs", document.getElementsByTagName("img"));

let imagenes = document.getElementsByTagName("img");


for (const imag of imagenes) {
imag.setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}
//  EJERCICIO 6

console.log(document.querySelector('.infocard-lg-data.text-muted'));

let infocards = document.querySelectorAll('.infocard-lg-data.text-muted');

console.log(document.querySelectorAll('.itype.flying'));
let tipov = document.querySelectorAll('.itype.flying');

for (const tipo of infocards) {
    const voladores = tipo.querySelector('.itype.flying');
    
    if (voladores) {
        tipo.style.backgroundColor = 'yellow'; 
    }
}

