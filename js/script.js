
const envio = document.querySelector('#boton');

envio.addEventListener('click' , function(e){

     e.preventDefault();
     resolucion();
     

});


function resolucion(){

    const texto = String(document.querySelector('#mensaje').value).trim();
    const mensaje = texto.replace(/\s+\W+/g , ' ');
    const expresion = mensaje.split(' ');
    console.log(expresion);
   
    let car;
    let tam;
    let cuerpo;
    let text;

    for(let i=0; i<expresion.length; i++){

       tam = expresion[i].length;
       car = expresion[i].charAt(0).toUpperCase();

       cuerpo = expresion[i].substring(1 , tam);
       text = car + cuerpo;
       console.log(text);


    }

}