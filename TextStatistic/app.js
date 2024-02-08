let textarea = document.getElementById("area");
textarea.addEventListener("input", onChange);

function onChange(e) {
  const text = textarea.value;
  const numCharacters = text.length;
  const numCharactersNoSpaces = text.replace(/[\r\n ]/g, "").length;
  const numWords = text.replace(/[\r\n ]/g, " ").split(" ").length;
  const numSentences = text.split(".").length;

  document.getElementById("characters").innerHTML = numCharacters;
  document.getElementById("characters-no-spaces").innerHTML =
    numCharactersNoSpaces;
  document.getElementById("words").innerHTML = numWords;
  document.getElementById("sentences").innerHTML = numSentences;
}
