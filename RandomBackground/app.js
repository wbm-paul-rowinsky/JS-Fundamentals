const randomColor = {
  button: document.querySelector("#random-color-button"),
  input: document.querySelector("#color-text"),
  init: function () {
    this.button.addEventListener("click", (e) => {
      this.getRandomColor();
    });
    this.input.addEventListener("click", (e) => {
      this.copyColorToClipboard();
    });

    this.getRandomColor();
  },
  getRandomColor: function () {
    // r. g. b. od 0 do 255 = 256 moliwości na kolor
    // 256 * 256 * 256 - 1 = 16777215 kolorów
    const newColor = "#" + Math.floor(Math.random() * 16777215);
    console.log(newColor);
    this.input.value = newColor;
    document.body.style.background = newColor;
  },
  copyColorToClipboard: function () {
    const value = this.input.value;

    navigator.clipboard.writeText(value).then(function () {
      console.log("Kolor zapisany w schowku: " + value);
    });
  },
};

randomColor.init();
