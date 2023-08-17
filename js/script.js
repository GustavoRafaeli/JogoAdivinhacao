//Variaveis
let randomNumber;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resultado = document.getElementById("resultado");
const tenteNovamente = document.getElementById("tenteNovamente");

//Corpo
document.addEventListener("DOMContentLoaded", function () {
  SetRandomNumber();
 
  guessButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (userGuess < 1 || userGuess > 20) {
      resultado.textContent = "Por favor, escolha um número entre 1 e 20.";
      return;
    }

    if (userGuess < randomNumber) {
      resultado.textContent = "O número pensado é maior. Tente novamente.";
    } else if (userGuess > randomNumber) {
      resultado.textContent = "O número pensado é menor. Tente novamente.";
    } 
    else if (userGuess == empty) {
      resultado.textContent = "Digite algo!";
    }
    else {
      resultado.textContent = `Parabéns! Você adivinhou o número ${randomNumber}.`;
      document.getElementById("tenteNovamente").classList.remove("reset");
   
    }

    console.log(randomNumber);
    guessInput.value = "";
  });

  tenteNovamente.addEventListener("click", function () {
       sumirBotao();

    });
});

//Funções
function SetRandomNumber() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
  }

function sumirBotao(){
    SetRandomNumber();
    document.getElementById("tenteNovamente").classList.add("reset");
    resultado.textContent = "";

}