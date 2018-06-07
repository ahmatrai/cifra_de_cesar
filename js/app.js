function criptografar() {
  var sentence = prompt("Insira o seu texto");
  var newSentence = "";
  var element = document.getElementById("criptografado");

  if (sentence !== "") {
    // criptografar ----------------------------------------------------------------------------
    // Percorro caractere por caractere da frase (sentence)
    for(var i = 0; i < sentence.length; i++) {
      // Pego o valor decimal ASCII do caractere atual,
      // definido por i e joga em charNumber
      charNumber = sentence.charCodeAt(i);

      // verifico se charNumber é uma letra
      if (!(charNumber >= 97 && charNumber <= 122 || charNumber >= 65 && charNumber <= 90)) {
        element.innerHTML = "Caractere inválido!!! " + String.fromCharCode(charNumber);
        return false;
      }

      // Chamo a função cipher e jogo o resultado em um
      // novo numero de caractere
      var newCharNumber = cipher(charNumber);

      // Converto newCharNumber em uma letra novamente
      // e coloco em minha nova string
      newSentence += String.fromCharCode(newCharNumber);
    }

    // Decriptografar ----------------------------------------------------------------------------
    // Percorro caractere por caractere da frase (sentence)
    for(var i = 0; i < newSentence.length; i++) {
      // Pego o valor decimal ASCII do caractere atual,
      // definido por i e joga em charNumber
      charNumber = newSentence.charCodeAt(i);

      // Chamo a função cipher e jogo o resultado em um
      // novo numero de caractere
      var newCharNumber = decipher(charNumber);

      // Converto newCharNumber em uma letra novamente
      // e coloco em minha nova string
      sentence += String.fromCharCode(newCharNumber);
    }

    // Imprimo os resultados, criptografado e decriptografado, na tela
    element.innerHTML = "Seu texto criptografado é: " + newSentence + " e o seu texto decriptografado é: " + sentence;
    return false;
  }

  element.innerHTML = "Você não informou um texto. Até a próxima vez!";
  return false;
}
// Cifro charNumber
function cipher(charNumber) {
  return (charNumber - 65 + 33) % 26 + 65;
}

// Decifro newCharNumber
function decipher(charNumber) {
  return (charNumber - 33) % 26;
}
