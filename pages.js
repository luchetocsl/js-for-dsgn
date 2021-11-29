// Variable for page
let pageNumber = 0;

// Getting the buttons from the document
const nextTag = document.querySelector("footer img.next");
const prevTag = document.querySelector("footer img.prev");

// Grabing the H2 from the document
const outputTag = document.querySelector("h2");

// What happens if we click next: hint the number changes
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > 5) {
    pageNumber = 0;
  }

  updateSection();
};

// What happens if we click previous
const prev = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = 5;
  }

  updateSection();
};

// actual funtion that changes de niumber
const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

// listen to click
nextTag.addEventListener("click", function () {
  next();
});

// listen to click
prevTag.addEventListener("click", function () {
  prev();
});
