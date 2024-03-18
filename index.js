let homeScore = 0;
let guestScore = 0;
let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

function homeAddOne() {
  homeScore += 1;
  homeCount.innerText = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeCount.innerText = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeCount.innerText = homeScore;
}

function resetHome() {
  homeScore = 0;
  homeCount.innerText = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  guestCount.innerText = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  guestCount.innerText = guestScore;
}

function guestAddThree() {
  guestScore += 3;
  guestCount.innerText = guestScore;
}

function resetGuest() {
  guestScore = 0;
  guestCount.innerText = guestScore;
}
