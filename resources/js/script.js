let buttons = {
  solid1: document.getElementById("solid1"),
  solid2: document.getElementById("solid2"),
  solid3: document.getElementById("solid3"),
  solid4: document.getElementById("solid4"),
  solid5: document.getElementById("solid5"),
  solid6: document.getElementById("solid6")
};

let gifs = {
  scratch1: document.getElementById("scratch1"),
  scratch2: document.getElementById("scratch2"),
  scratch3: document.getElementById("scratch3"),
  scratch4: document.getElementById("scratch4"),
  scratch5: document.getElementById("scratch5"),
  scratch6: document.getElementById("scratch6")
};

let scratches = 0;

let audio1 = new Audio("resources/sound/win.ogg");
let audio2 = new Audio("resources/sound/win.wav");
let audio3 = new Audio("resources/sound/win.ogg");
let audio4 = new Audio("resources/sound/win.wav");
let audio5 = new Audio("resources/sound/win.ogg");
let audio6 = new Audio("resources/sound/win.wav");
let audio7 = new Audio("resources/sound/win.ogg");
let audio8 = new Audio("resources/sound/win.wav");
let audio9 = new Audio("resources/sound/win.ogg");
let audio10 = new Audio("resources/sound/win.wav");
let audio11 = new Audio("resources/sound/win.ogg");
let audio12 = new Audio("resources/sound/win.wav");

function showNumber1() {
  buttons.solid1.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}
function showNumber2() {
  buttons.solid2.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}
function showNumber3() {
  buttons.solid3.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}
function showNumber4() {
  buttons.solid4.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}
function showNumber5() {
  buttons.solid5.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}
function showNumber6() {
  buttons.solid6.style.display = "none";
  scratches++;
  if (scratches == 6) {
    setTimeout(openColorBox, 1000);
  }
}

function openColorBox() {
  $.colorbox({
    iframe: true,
    width: "80%",
    height: "80%",
    href: "modal.html"
  });
}

buttons.solid1.addEventListener("click", function() {
  gifs.scratch1.style.zIndex = "1";
  audio1.play();
  audio2.play();
  setTimeout(showNumber1, 2250);
});

buttons.solid2.addEventListener("click", function() {
  gifs.scratch2.style.zIndex = "1";
  audio3.play();
  audio4.play();
  setTimeout(showNumber2, 2250);
});

buttons.solid3.addEventListener("click", function() {
  gifs.scratch3.style.zIndex = "1";
  audio5.play();
  audio6.play();
  setTimeout(showNumber3, 2250);
});

buttons.solid4.addEventListener("click", function() {
  gifs.scratch4.style.zIndex = "1";
  audio7.play();
  audio8.play();
  setTimeout(showNumber4, 2250);
});

buttons.solid5.addEventListener("click", function() {
  gifs.scratch5.style.zIndex = "1";
  audio9.play();
  audio10.play();
  setTimeout(showNumber5, 2250);
});

buttons.solid6.addEventListener("click", function() {
  gifs.scratch6.style.zIndex = "1";
  audio11.play();
  audio12.play();
  setTimeout(showNumber6, 2250);
});
