var user_move;
var score = 0;
var cells = document.querySelectorAll(".button1");
cells.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(element.value);
    user_move = Number(element.value);
    clear_pic();
    turn();
  });
});

let clear_pic = () => {
  var obj = document.getElementById("pic");
  if (obj != null) obj.remove();

  var obj1 = document.getElementById("pic1");
  if (obj1 != null) obj1.remove();

  var obj2 = document.getElementById("turn");
  if (obj2 != null) obj2.remove();

  var obj3 = document.getElementById("turn1");
  if (obj3 != null) obj3.remove();
};

let turn = () => {
  var computer_move = Math.floor(Math.random() * 10) + 1;
  console.log(user_move);
  console.log(computer_move);

  var img = document.createElement("img");
  img.id = "pic";
  switch (computer_move) {
    case 1:
      img.src = "./images/one.jpeg";
      break;
    case 2:
      img.src = "./images/two.jpeg";
      break;
    case 3:
      img.src = "./images/three.jpeg";
      break;
    case 4:
      img.src = "./images/four.jpeg";
      break;
    case 5:
      img.src = "./images/five.jpeg";
      break;
    case 6:
      img.src = "./images/six.jpeg";
      break;
    case 7:
      img.src = "./images/seven.jpeg";
      break;
    case 8:
      img.src = "./images/eight.jpeg";
      break;
    case 9:
      img.src = "./images/nine.jpeg";
      break;
    case 10:
      img.src = "./images/ten.jpeg";
  }
  document.getElementById("left1").appendChild(img);

  var p = document.createElement("h2");
  p.id = "turn";
  var txt = document.createTextNode("Computer plays: " + computer_move);
  p.appendChild(txt);
  document.getElementById("left1").appendChild(p);

  var img1 = document.createElement("img");
  switch (user_move) {
    case 1:
      img1.src = "./images/one.jpeg";
      break;
    case 2:
      img1.src = "./images/two.jpeg";
      break;
    case 3:
      img1.src = "./images/three.jpeg";
      break;
    case 4:
      img1.src = "./images/four.jpeg";
      break;
    case 5:
      img1.src = "./images/five.jpeg";
      break;
    case 6:
      img1.src = "./images/six.jpeg";
      break;
    case 7:
      img1.src = "./images/seven.jpeg";
      break;
    case 8:
      img1.src = "./images/eight.jpeg";
      break;
    case 9:
      img1.src = "./images/nine.jpeg";
      break;
    case 10:
      img1.src = "./images/ten.jpeg";
  }
  img1.id = "pic1";
  document.getElementById("right1").appendChild(img1);

  var p1 = document.createElement("h2");
  p1.id = "turn1";
  var txt1 = document.createTextNode("User plays: " + user_move);
  p1.appendChild(txt1);
  document.getElementById("right1").appendChild(p1);

  if (user_move != computer_move) score = score + user_move;
  else {
    var rem = document.getElementById("buttons");
    if (rem != null) rem.remove();
    var result = document.createElement("h2");
    var result_txt = document.createTextNode("Your Score : " + score);
    result.appendChild(result_txt);
    document.getElementById("result").appendChild(result);
  }
  console.log(score);
};
