const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

//randomly selected imges will be added from JS to HTML
//create the html tag from JS
window.addEventListener("load", () => {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  //const bgImage = document.createElement("img");
  //bgImage.setAttribute("class", "bgImage");
  //bgImage.src = `img/${chosenImage}`;
  //document.body.appendChild(bgImage); //add to html body
  document.body.style.backgroundImage = `url(img/${chosenImage})`;
});
