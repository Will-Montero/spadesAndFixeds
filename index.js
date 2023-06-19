const secretNumber = "257";
let attempts = 0;
let maxAttempts = 17;

function numberVerify(attemptsNumber) {
    let spades = 0;
    let fixed = 0;
  
    for (let i = 0; i < secretNumber.length; i++) {
      let attemptDigit = attemptsNumber[i];
  
      if (attemptDigit === secretNumber[i]) {
        fixed++;
      } else if (secretNumber.includes(attemptDigit)) {
        spades++;
      }
    }
  
    console.log("Intento: " + attemptsNumber + " - Picas: " + spades + ", Fijas: " + fixed);
  
    if (fixed === 3 || attemptsNumber === secretNumber) {
      console.log("Felicidades, has ganado");
      return true;
    }
  
    return false;
  }

  console.log("esto es Picas y Fijas. Adivina el número secreto de 3 cifras.");
console.log("Tienes un máximo de " + maxAttempts + " intentos.");

while (attempts <  maxAttempts) {
  let attemptsNumber = prompt("Ingresa un número de 3 cifras:");

  if (attemptsNumber.length !== 3) {
    console.log("El número debe tener 3 cifras. Intenta de nuevo.");
    continue;
  }

  if (numberVerify(attemptsNumber)) {
    break;
  }

  attempts++;
}

if (attempts ===  maxAttempts) {
  console.log("Se alcanzó el máximo de intentos permitidos, PERDIÓ, el número secreto es", secretNumber);
}