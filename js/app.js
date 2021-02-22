var elements = document.getElementsByClassName("tecla");
var display = document.querySelector('#display');
var swSigno =0;
var numero = 0;

//Casos para realizar si era número o si es simbolo de operación
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
        numero = this.attributes.id.value;
        Presionar(this);
        if (display.outerText.length<=7) {
            if (validar(numero)) {
                CapturarValor(numero);
            }else{
                switch (numero){
                    case "mas":
                        display.innerText += "+";
                    break;
                    case "menos":
                        display.innerText += "-";
                    break;
                    case "por":
                        display.innerText += "*";
                    break;
                    case "dividido":
                        display.innerText += "/";
                    break;
                    case "raiz":
                        var raiz= Math.sqrt(display.outerText);
                        display.innerText = raiz.toFixed(8);
                        
                    break;
                    case "punto":
                        if(display.outerText.charAt(display.outerText.length-1)=="."){
                            console.log("ya tiene un punto")
                        }else{
                            display.innerText += ".";
                        }  
                    break;
                    case "signo":
                       signo(display.outerText);
                    break;
                    case "igual":
                        igual(display.outerText);
                    break;
                    default:
                        console.log("No presiono ninguna tecla valida")
                    break;
                }
            }
        }else{
            alert("No se puede agregar más números");
        }
        
    });
}

//Función de presionar el boton 
function Presionar(element){
    element.classList.add('transformar');
    if(element.classList.contains('transformar')){
    document.querySelector(".transformar").style.border = "2px solid transparent";
    setTimeout(function(){
        document.querySelector(".transformar").style.border = "0px solid transparent";
        document.querySelector('.transformar').classList.remove('transformar');
    },200);
    }
}

//Función capturar valor e imprimir en ventana
function CapturarValor(valor){
    if(display.outerText == "0"){
        display.innerText = valor;
    }else{
        if(display.outerText.length >= 1){
            display.innerText += valor;
        }else{
        }
    }  
}

//Funcion borrar btn_ ON/C
document.querySelector('#on').addEventListener('click', function(){
    display.innerText = "0";
});

//Función para validar número u operadores
function validar(num1){
	if(isNaN(num1)){
		return false;
	}else{
		return true;
	}
}

//Funcion para totalizar
function igual(cadena){
    var resultado=eval(cadena);
    display.innerText = resultado;
}

//Funcion signo
function signo(calculo){
    if (swSigno==0) {
        display.innerText ="-"+calculo;
        swSigno=1;
    }else{
        display.innerText =calculo*(-1);
        swSigno=0;
    }
}