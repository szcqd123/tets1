alert("欢迎来都画图器");
let userChar = [];
function getUserChar() {
  let input = prompt(
    "请输入用来画图的符号，如果有多个请按确认添加，按取消继续！",
    "*"
  );
  if (input) {
    userChar.push(input);
    getUserChar();
  } else {
    if (userChar.length < 1) {
      alert("必须至少输入一个符号！");
      getUserChar();
    }
  }
}
getUserChar();
let option;
function getUserOption() {
  let input = prompt("请输入图形，可以是：正方形、三角形、菱形", "正方形");
  let allowInputs = ["正方形", "三角形", "菱形"];
  if (!input || !allowInputs.includes(input)) {
    alert("输入的选项不正确！");
    getUserOption();
  } else {
    option = input;
  }
}
getUserOption();

let size;
function getSize() {
  let input = prompt("请输入大小：菱形必须是单数", "7");
  if (!input || input > 10) {
    alert("输入的选项不正确！");
    getSize();
  } else {
    size = ~~input;
  }
}
getSize();
let index = 0;
let resultStr = "";
function draw() {
  if (index >= userChar.length) {
    index = 0;
  }
  resultStr += userChar[index++];
}
if (option == "正方形") {
  for (let i = 0; i < size; i++) {
    for (let y = 0; y < size; y++) {
      draw();
    }
    resultStr += "\n";
  }
} else if (option == "三角形") {
  for (let i = 0; i < size; i++) {
    for (let y = 0; y < i + 1; y++) {
      draw();
    }
    resultStr += "\n";
  }
} else if (option == "菱形") {
  for (let i = 0; i < size; i++) {
    for (let y = 0; y < size - i; y++) {
      resultStr += " ";
    }
    for (let y = 0; y < i + 1; y++) {
      draw();
    }
  }
  for (let i = size - 1; i > 0; i--) {
    for (let y = 0; y < size - i; y++) {
      resultStr += " ";
    }
    for (let y = 0; y < i + 1; y++) {
      draw();
    }
  }
}
alert(resultStr);
