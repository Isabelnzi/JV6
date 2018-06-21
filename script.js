function number() {
//declarations des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regex= /^([0-9]+[.1][0-9]?[0-9]+)$/;
//restant de la divisison
if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
// calcul du modulo
alert(firstNumber % secondNumber);
 // affichage du résultat
} else {
  alert('Veuillez entrer un nombre entier ou décimal');
}
}
