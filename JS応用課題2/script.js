let balls = [
  "./images/ball01_red.png",
  "./images/ball02_white.png",
  "./images/ball05_blue.png",
  "./images/ball06_green.png"
];

let ballsInBox = [
  "./images/ball01_red.png",
  "./images/ball02_white.png",
  "./images/ball05_blue.png",
  "./images/ball06_green.png"
];

const cursorLeft = document.querySelectorAll(".left");
const valuesLeft = Object.values(cursorLeft);
const cursorRight = document.querySelectorAll(".right");
const valuesRight = Object.values(cursorRight);

/*左矢印クリック後の挙動*/
for(let i = 0; i < valuesLeft.length; i++){
  valuesLeft[i].addEventListener("click", () => {
  console.log("左矢印がクリックされました！" + (i + 1));
  correctNums = 0;
  replaceBalls(i);
  renderCircle(balls);
  compareTwo(ballsInBox, balls);
  judge(correctNums);
})
};

/*右矢印クリック後の挙動*/
for(let i = 0; i < valuesRight.length; i++){
  valuesRight[i].addEventListener("click", () => {
  console.log("右矢印がクリックされました！" + i);
  correctNums = 0;
  replaceBalls(i);
  renderCircle(balls);
  compareTwo(ballsInBox, balls);
  judge(correctNums);
})
};

/*リセットボタン押下後の挙動*/
const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", () => {
  do {
    shuffleElements(ballsInBox); /*中のボールのシャッフル*/
    shuffleElements(balls); /*外のボールのシャッフル*/
    compareTwo(ballsInBox, balls); /*箱の中外の色の比較*/
  } while(correctNums !== 0) /*箱の中外で色一致がなくなるまで繰り返す*/
  /*ここからシャッフル完了後*/
  renderCircle(balls); 
  judge(correctNums);
  console.log(ballsInBox);
  console.log(balls);
})

/*現在の配列の並びどおりにボールを描画する関数*/
const renderCircle = (ballList) => {
  const ballElements = Object.values(document.querySelectorAll(".ballimage"));
  for (let i = 0; i < ballElements.length; i++){
    ballElements[i].src = ballList[i];
  }
}

/*シャッフル関数*/
const shuffleElements = (hogehoge) => {
  for (let i = hogehoge.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [hogehoge[i], hogehoge[j]] = [hogehoge[j], hogehoge[i]];
  }
}

/*隣り合うボール(外)を入れ替える関数*/
const replaceBalls = (ballNum) => {
  [balls[ballNum], balls[ballNum + 1]] = [balls[ballNum + 1], balls[ballNum]]
}

/*箱の中外のボールの一致を比較する関数*/
const compareTwo = (numOne, numTwo) => {
  correctNums = 0;
  for (let i = 0; i < balls.length; i++){
    if (numOne[i] === numTwo[i]){
      correctNums += 1;
    }
  }
}

const correct = document.getElementById("correctnum");
/*一致している個数を知らせる関数*/
const judge = (correctnumbers) => { 
  correct.innerText = correctnumbers + "個正解しています";
}

/*初期表示*/
let correctNums = 0;
do { 
  shuffleElements(ballsInBox); /*中のボールのシャッフル*/
  shuffleElements(balls); /*外のボールのシャッフル*/
  compareTwo(balls, ballsInBox); /*箱の中外の色の比較*/
} while(correctNums !== 0); /*箱の中外で色一致がなくなるまで繰り返す*/
renderCircle(balls); /*シャッフル完了後のボール描画*/
console.log(ballsInBox);