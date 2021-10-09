var inputPrimeNo = document.querySelector('#input-prime-no')
var isPrime = true
var primeOutput = document.querySelector('.prime-output')
var btnCheckPrime = document.querySelector('#btn-check-prime')
function checkPrime(inputPrimeValue) {
var inputPrimeValue = inputPrimeNo.value
  if (inputPrimeValue === 1) {
    primeOutput.innerText = `1 is neither prime nor composite number`
  } else if (inputPrimeValue > 1) {
    for (var i = 2; i < inputPrimeValue; i++) {
      if (inputPrimeValue % i == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      primeOutput.innerText = `${inputPrimeValue} is a prime number`
    } else {
      primeOutput.innerText = `${inputPrimeValue} is not a prime number`

    }
  }
  else{
    primeOutput.innerText = `${inputPrimeValue} is not a prime number`
  }
}
btnCheckPrime.addEventListener('click', checkPrime)
