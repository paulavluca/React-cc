const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("mySuperH3");

console.log(myH1);
console.log(myH3);

//modifico
myH3.innerText = "Estoy modificando el texto dentro del h3";
const myButtonStr = "<button>Esto es un button</button>";

myH3.innerHTML = myButtonStr;

//Pongo 10 botones concatenando strings
const const_element = 5;
for(let index = 0; index < const_element; index++){
    myH3.innerHTML += myButtonStr;
}

// const myObj = {
//     "atributo": "valor"
// }

// const myObjeto2 = {
//     atributo1: "valor",
//     atributo2: "otro valor"
// }


//Actividad

// let h3React = myDoc.getElementById("videoReact");
// h3React.innerText = "Nuevo curso Freecodecamp";
// h3React.innerHTML = "Nuevo curso Freecodecamp React";
// const myVideo = <video src="www.youtube.com/watch?v=6Jfk8ic3KVk&t=9111s&ab_channel=freeCodeCampEspa%C3%B1ol"></video>;

// const const_element2 = 3;
// for(let index = 0; index < const_element2; index++){
//     h3React.innerHTML += myVideo;
// }