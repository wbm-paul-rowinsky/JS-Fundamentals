const lightbox = {
  gallery: document.querySelector(".gallery"),
  init: function () {
    this.container = document.createElement("div");
    this.container.id = "lightbox";
    document.body.appendChild(this.container);

    this.lightboxImg = document.createElement("img");
    this.container.appendChild(this.lightboxImg);

    this.loadImages();
  },
  loadImages: function (keywordsArr, defSize = "300x300") {
    let keywords = [
      "car",
      "bicycle",
      "sun",
      "water",
      "bike",
      "ocean",
      "ship",
      "house",
      "plant",
      "sea",
      "traffic",
      "planet",
      "pen",
      "red",
      "blue",
      "green",
      "forest",
      "yellow",
      "silver",
      "truck",
      "skyscrapper",
      "laptop",
      "cpu",
    ];

    if (keywordsArr) keywords = keywordsArr;
    let htmlCode = "";

    for (let keyword of keywords) {
      keyword = keyword.trim().toLowerCase();
      let mykeyword = keywords[Math.floor(Math.random() * keywords.length)];
      console.log("Moje kiwordy: ", mykeyword);
      let url = `https://source.unsplash.com/${defSize}?${mykeyword}`;
      htmlCode += `<img src="${url}" alt="${keyword}">`;
      url = `https://source.unsplash.com/${defSize}?${keyword}`;
      htmlCode += `<img src="${url}" alt="${mykeyword}">`;
      console.log("NieMOJE kiwordy: ", keyword);
    }

    this.gallery.innerHTML = htmlCode;

    this.addListeners();
  },
  addListeners: function () {
    const images = document.querySelectorAll(" .gallery img");
    images.forEach((img) => {
      img.addEventListener("click", (event) => this.galleryImgClicked(img));
    });
    this.container.addEventListener("click", (event) => {
      this.hide();
    });
  },
  galleryImgClicked: function (img) {
    this.show(img);
  },
  show: function (img) {
    this.lightboxImg.src = img.src;
    this.container.classList.add("active");
  },
  hide: function () {
    this.container.classList.remove("active");
  },
};

lightbox.init();
