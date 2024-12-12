const tittle = document.getElementById("tittle");
const restart = document.getElementById("restart");

let turn = "x";
let square = [];
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "" && square.length != 9) {
    tittle.innerHTML = `O turn`;
    element.innerHTML = "X";
    turn = "o";
  } else if (turn === "o" && element.innerHTML == "" && square.length != 9) {
    tittle.innerHTML = `X turn`;
    element.innerHTML = "O";
    turn = "x";
  } else {
    tittle.innerHTML = "Draw!!😒";
    setInterval(() => {
      tittle.innerHTML += ".";
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  winner();
}
function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("iteam" + i).innerHTML;
  }
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    end(1, 2, 3);
  }
  if (square[4] == square[5] && square[5] == square[6] && square[4] != "") {
    end(4, 5, 6);
  }
  if (square[7] == square[8] && square[8] == square[9] && square[7] != "") {
    end(7, 8, 9);
  }
  if (square[1] == square[4] && square[4] == square[7] && square[1] != "") {
    end(1, 4, 7);
  }
  if (square[2] == square[5] && square[5] == square[8] && square[2] != "") {
    end(2, 5, 8);
  }
  if (square[3] == square[6] && square[6] == square[9] && square[3] != "") {
    end(3, 6, 9);
  }
  if (square[1] == square[5] && square[5] == square[9] && square[1] != "") {
    end(1, 5, 9);
  }
  if (square[3] == square[5] && square[5] == square[7] && square[3] != "") {
    end(3, 5, 7);
  }
}
function end(num1, num2, num3) {
  tittle.innerHTML = `${square[num1]} Winner!🤩`;
  document.getElementById("iteam" + num1).style.background = "pink";
  document.getElementById("iteam" + num2).style.background = "pink";
  document.getElementById("iteam" + num3).style.background = "pink";
  setInterval(() => (tittle.innerHTML += "."), 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
restart.addEventListener("click", () => {
  location.reload();
});
