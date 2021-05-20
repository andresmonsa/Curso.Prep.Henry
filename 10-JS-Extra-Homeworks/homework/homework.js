// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let arrayObjeto= []; // Aquí almacenamos los nuevos arreglos
  let objetosArray= [] // array de objeto original
  const arrayLenght = 2;
  //Escribe tu código aquí
  for (let obj in objeto){

    objetosArray.push(obj,objeto[obj])
    
  }
    for (let i = 0; i < objetosArray.length; i += arrayLenght) {
      let pedazo = objetosArray.slice(i, i + arrayLenght);
      arrayObjeto.push(pedazo);
    }
  return arrayObjeto;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

    let letterAmount = {};
    for(i=0; i<string.length; i++){
        let letter = string[i]
        if(letterAmount[letter] == undefined){
            letterAmount[letter]=1
        }else{
            letterAmount[letter]++
        }
    }    

  return letterAmount
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 
let frase2 = []

 function esMayuscula(letra)
 {
     return letra === letra.toUpperCase();
 }
 
 function esMinuscula(letra)
 {
     return letra === letra.toLowerCase();
 }   
 

 for( i=s.length-1; i>=0 ;i--){
   if(esMayuscula(s[i])){
     frase2.unshift(s[i])
   }
 }
 for(i=0; i<s.length; i++){
     if(esMinuscula(s[i])){
       frase2.push(s[i])
     }
}
return frase2.join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let yarra = (str.split(" "))  // array de palabras separadas por espacio
  let letraInvertida = []  // letra invertida
  let palabraInvertida = [] // palabra invertida
  let fraseInvertida = [];   // frase que quiero returnar
  
  for(i=0; i<yarra.length;i++){
    let palabra = yarra[i]
    // console.log(palabra);    // cada palabra
  
      for( x=palabra.length-1; x>=0 ;x--){
        // console.log(palabra[x])   // cada letra de la palabra, espejada
        
        letraInvertida = palabra[x]
        palabraInvertida.push(letraInvertida) 
        
      }
      let palabraFinal = palabraInvertida.join("")
      fraseInvertida.push(palabraFinal)
      palabraInvertida = []
  }
  return fraseInvertida.join(" ")
  
  
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numStr = numero.toString()  
  console.log(numStr)

  let str = numStr.split("");
  //console.log(str)

  let rts = str.reverse();
  //console.log(rts)

  let stringa = rts.join("");

  parseInt(stringa);
  console.log(stringa)


  if (numero == stringa){
    return "Es capicua"
  } else{
    return "No es capicua"
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 

//// -> RECORRO CADENA -->>APLICO FILTRO  --->>> PUSHEO A UN ARRAY CADA ELEMENTO ---->>>> JOINEO LA NUEVA CADENA. ----->>>>> RETRONO CADENA

   
    let cadenaArray= [];
    for (i=0; i<cadena.length; i++){
        if (cadena[i] != "a" && cadena[i] != "b" &&  cadena[i] != "c" ) {
            cadenaArray.push(cadena[i])
        }
    }
    let cadenaJoin= cadenaArray.join("")

    if (cadenaJoin == cadena) {
        return cadena
    }else {
        return cadenaJoin
    }


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrApo = [];
  for(i=0;i<arr.length;i++){
    if(arr[i].length<arr[i+1].length){
      arrApo.push(arr[i])
    }
  }
console.log(arrApo)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

