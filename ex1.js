var peso= 45
var altura= 1.62
var imc= peso/(altura**2)
    console.log(imc)
 
if (imc <=18.5){
    console.log("Abaixo do peso");
}
 
if (imc >18.5 && imc <= 24.9){
    console.log("Peso normal");
}
 
if (imc >=25 && imc <= 29.9){
    console.log("Sobrepeso");
}
 
if (imc >=30){
    console.log("Obesidade");
} 