let allButtons = document.querySelectorAll("button.drum");

let drumType, trimmedDrumType, audio, currentKey;

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    drumType = this.querySelectorAll("img")[0].getAttribute("src");

    currentKey = document
      .querySelectorAll("button")
      [i].getAttribute("class")
      .replace(" drum", "");
    buttonAnimation(currentKey);

    trimmedDrumType = drumType.replace("./images/", "");

    audio = new Audio("sounds/" + trimmedDrumType.replace(".png", ".mp3"));

    audio.play();
  });
}
document.addEventListener("keydown", function (event) {
  // event.key basılan tuşun adını verir
  switch (event.key) {
    case "w":
      buttonAnimation(event.key);
      let tom1 = new Audio("./sounds/tom1.mp3");
      tom1.play();
      break;
    case "a":
      buttonAnimation(event.key);
      let tom2 = new Audio("./sounds/tom2.mp3");
      tom2.play();
      break;
    case "s":
      buttonAnimation(event.key);
      let tom3 = new Audio("./sounds/tom3.mp3");
      tom3.play();
      break;
    case "d":
      buttonAnimation(event.key);
      let tom4 = new Audio("./sounds/tom4.mp3");
      tom4.play();
      break;
    case "j":
      buttonAnimation(event.key);
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      buttonAnimation(event.key);
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      buttonAnimation(event.key);
      let kick = new Audio("./sounds/kick.mp3");
      kick.play();
      break;
  }
});
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
