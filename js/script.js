// Mobile Menu Closing X
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const toggleOnClick = document.getElementById("hamburgerBtn");

toggleOnClick.onclick = toggleMenu;

// Copyright Date
const rightNow = new Date();
document.querySelector("#year").textContent = rightNow.getFullYear();

// Reviews
// Get the data from the reviews file
import { reviews } from "../js/reviews.js";
console.log(reviews);

// create empty cards
const cardsDiv = document.querySelector("#cards");

// start the loop
for (let x = 0; x < reviews.length; x++) {
  //create a new section for each individual review
  const individualReviewSection = document.createElement("section");

  // create an h3 tag and put the reviewer's name in it
  const reviewersName = document.createElement("h3");
  reviewersName.textContent = reviews[x].name;

  //create p tag and put comment in it
  const reviewText = document.createElement("p");
  reviewText.textContent = reviews[x].text;

  //create a div for the stars
  const starDiv = document.createElement("div");
  //create an image element for the star

  for (let step = 0; step < reviews[x].stars; step++) {
    const starImg = document.createElement("img");
    //add the star to the image
    starImg.src = "./images/star.svg";
    // put the image into the div
    starDiv.append(starImg);
  }

  //attach the h3 and paragraph to the section
  individualReviewSection.appendChild(reviewersName);
  individualReviewSection.appendChild(starDiv);
  individualReviewSection.appendChild(reviewText);

  cardsDiv.appendChild(individualReviewSection);
}
