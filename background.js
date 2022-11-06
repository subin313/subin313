const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const wrap = document.getElementById("wrap");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;


wrap.appendChild(bgImage);
const back = "back"


bgImage.classList.add(back);