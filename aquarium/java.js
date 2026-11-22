
// squid up and down
const sua_1 = document.querySelector(".sua_1");
let sua_1Y = 15;
let sua_1Direction = 1;

setInterval(() => {
  sua_1Y += sua_1Direction * 0.5;
  if (sua_1Y > 100 || sua_1Y < 10) sua_1Direction *= -1;
  sua_1.style.top = `${sua_1Y}%`;
}, 15);

const stingray = document.querySelector('.stingray');
let stingrayX = 210, stingrayY = 210;
let stingrayVX = 2, stingrayVY = 1.5;
let stingrayFlipped = false;

function movestingray() {
  stingrayX += stingrayVX;
  stingrayY += stingrayVY;

  const stingrayWidth = 200;
  const stingrayHeight = 150;

  if (stingrayX + stingrayWidth > window.innerWidth || stingrayX < 0) {
    stingrayVX = (Math.random() * 2 + 1) * (stingrayVX > 0 ? -1 : 1);
    stingrayFlipped = !stingrayFlipped;
    stingray.style.transform = stingrayFlipped > 0 ? 'scaleX(1)' : 'scaleX(-1)';
  }

  if (stingrayY + stingrayHeight > window.innerHeight || stingrayY < 0) {
    stingrayVY = (Math.random() * 2 + 0.5) * (stingrayVY > 0 ? -1 : 1);
  }

  stingray.style.left = `${stingrayX}px`;
  stingray.style.top = `${stingrayY}px`;

  requestAnimationFrame(movestingray);
}
movestingray();

const shark = document.querySelector('.shark');
let sharkX = 100, sharkY = 100;
let sharkVX = 2, sharkVY = 0;
let sharkFlipped = false;

function moveShark() {
  sharkX += sharkVX;
  sharkY += sharkVY;

  const sharkWidth = 200;
  const sharkHeight = 150;

  if (sharkX + sharkWidth > window.innerWidth || sharkX < 0) {
    sharkVX = (Math.random() * 4 + 2) * (sharkVX > 0 ? -1 : 1);
    sharkFlipped = !sharkFlipped;
    shark.style.transform = sharkFlipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (sharkY + sharkHeight > window.innerHeight || sharkY < 0) {
    sharkVY = (Math.random() * 2 + 1) * (sharkVY > 0 ? -1 : 1);
  }

  shark.style.left = `${sharkX}px`;
  shark.style.top = `${sharkY}px`;

  requestAnimationFrame(moveShark);
}
moveShark();

const diver1 = document.querySelector('.diver1');
let diver1X = 50, diver1Y = 400;
let diver1VX = 1, diver1VY = 0.5;
let diverFlipped = false;
function move_diver_1() {
  diver1X += diver1VX;
  diver1Y += diver1VY;

  const diver1Width = 200;
  const diver1Height = 100;

  if (diver1X + diver1Width > window.innerWidth || diver1X < 0) {
    diver1VX = (Math.random() * 1 + 1) * (diver1VX > 0 ? -1 : 1);
    diverFlipped = !diverFlipped;
    diver1.style.transform = diverFlipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (diver1Y + diver1Height > window.innerHeight || diver1Y < 0) {
    diver1VY = (Math.random() * 1 + 1) * (diver1VY > 0 ?   -1 : 1);
  }

  diver1.style.left = `${diver1X}px`;
  diver1.style.top = `${diver1Y}px`;

  requestAnimationFrame(move_diver_1);
}
move_diver_1();

const diver2 = document.querySelector('.diver2');
let diver2X = 50, diver2Y = 350;
let diver2VX = 1, diver2VY = 0.5;
let diver2Flipped = false;
function move_diver_2() {
  diver2X += diver2VX;
  diver2Y += diver2VY;

  const diver2Width = 200;
  const diver2Height = 100;

  if (diver2X + diver2Width > window.innerWidth || diver2X < 0) {
    diver2VX = (Math.random() * 1 + 1) * (diver2VX > 0 ? -1 : 1);
    diver2Flipped = !diver2Flipped;
    diver2.style.transform = diver2Flipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (diver2Y + diver2Height > window.innerHeight || diver2Y < 0) {
    diver2VY = (Math.random() * 1 + 1) * (diver2VY > 0 ?   -1 : 1);
  }

  diver2.style.left = `${diver2X}px`;
  diver2.style.top = `${diver2Y}px`;

  requestAnimationFrame(move_diver_2);
}
move_diver_2();

const turtle = document.querySelector('.turtle');
let turtleX = 50, turtleY = 400;
let turtleVX = 2, turtleVY = 1;
let turtleFlipped = false;
function moveturtle() {
  turtleX += turtleVX;
  turtleY += turtleVY;

  const turtleWidth = 200;
  const turtleHeight = 100;

  if (turtleX + turtleWidth > window.innerWidth || turtleX < 0) {
    turtleVX = (Math.random() * 1 + 1) * (turtleVX > 0 ? -1 : 1);
    turtleFlipped = !turtleFlipped;
    turtle.style.transform = turtleFlipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (turtleY + turtleHeight > window.innerHeight || turtleY < 0) {
    turtleVY = (Math.random() * 1 + 1) * (turtleVY > 0 ? -1 : 1);
  }

  turtle.style.left = `${turtleX}px`;
  turtle.style.top = `${turtleY}px`;

  requestAnimationFrame(moveturtle);
}
moveturtle();

const ho_ca = document.querySelector(".ho_ca");
let theme = 0;
toggleTheme.addEventListener('click', () => {
  theme++;
  if (theme % 2 === 0) {
    ho_ca.style.background = "linear-gradient(to bottom, rgb(39, 159, 211), rgb(17, 28, 122))";
  } else {
    ho_ca.style.background = "linear-gradient(to bottom, rgb(245, 249, 39), rgb(192, 108, 12))";
  }
});

let isPlaying = false;
toggleMusic.addEventListener('click', () => {
  if (!bgMusic) return;
  if (!isPlaying) {
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        toggleMusic.textContent = "Turn off";
      })
      .catch(err => {
        console.warn("VIRUS DETECTED", err);
      });
  } else {
    bgMusic.pause();
    isPlaying = false;
    toggleMusic.textContent = "Turn on";
  }
});