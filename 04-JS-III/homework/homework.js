// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var n=array[0]
  return n;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 
  for(var i=0;i<=array.length-1;i++){
       array[i]+=1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str=palabras[0];
  for(var i=1;i<=palabras.length-1;i++){
    str=str+" "+palabras[i]
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var boolean=true;
  var i=0;
  do{
      if (array[i]===elemento){
         boolean=false
      }
      i+=1;
  }while (boolean&&i<=array.length-1)

   if (!boolean){
        return true
   }
   return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i=0;
  for(var n=0;n<=numeros.length-1;n++){
    i+=numeros[n]
  }
  return i;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var numerador=0;
  for(var i=0;i<=resultadosTest.length-1;i++){
    numerador+=resultadosTest[i];
  }
  return (numerador/resultadosTest.length) 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=numeros[0];
  for(var i=1;i<=numeros.length-1;i++){
        if (numeros[i]>mayor){
               mayor=numeros[i]
        }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length===0){
       return 0
      }
  if (arguments.length===1){
    return arguments[0]
  }
  var j=arguments[0];
  for(var i=1;i<=arguments.length-1;i++){
       j=j*arguments[i]
  }
return j;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad =0;
  for (var i=0;i<=arreglo.length-1;i++){
     if (arreglo[i]>18){
         cantidad+=1;
     }
  }
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  
  switch (numeroDeDia){
     case 1:
     case 7: return "Es fin de semana" 
         break;
     case 6:
     case 2:
     case 3:
     case 4: 
     case 5: return "Es dia Laboral" ;
         break;
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str =n.toString();
    
  if (str[0]==='9'){
       return true
  }else{
       return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var todosIguales=true; 
  var primero =arreglo[0];
  var i=1;
  do{
      if (primero===arreglo[i]){
         i+=1
        }else{
        
        todosIguales=false;
      }
    
  }while(todosIguales && i<arreglo.length-1);
  if (todosIguales){
    return true
  }
  return false;
}



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var ene,mar,nov=false;
  var newArray=[];
  for(var i=0;i<=array.length;i++){
     if((array[i]==="Enero") && (!ene)){
         newArray.push(array[i])
         ene=true
     }
     if((array[i]==="Marzo") && (!mar)){
      newArray.push(array[i])
      mar=true
     }
     if((array[i]==="Noviembre") && (!nov)){
      newArray.push(array[i])
      nov=true
     }
  }
  if(!ene){
      return  "No se encontraron los meses pedidos"
  }
  if(!mar){
    return  "No se encontraron los meses pedidos"
  }
  if(!nov){
    return  "No se encontraron los meses pedidos"
  }  
return newArray;
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var newArray=[]
  for(var i=0;i<=array.length-1;i++){
      if(array[i]>100){
        newArray.push(array[i]);
      }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray=[];
  var num=numero;
  var interrumpio=false;
  for(var i=0;i<=9;i++){ 
   
       num+=2;
       newArray.push(num);  
     if (num===i){
      interrumpio=true;
     
      break;
    }
   
  }
  if(interrumpio){
     return "Se interrumpió la ejecución"
  }
  return newArray;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray=[];
  var num=numero;
  for(var i=0;i<=9;i++){
        
    if (5===i){
      continue;
      
    }
    num+=2;
    newArray.push(num); 
  }
  return newArray;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
