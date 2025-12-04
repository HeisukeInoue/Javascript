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

let correctNums = 0;
const cursorLeft = document.querySelectorAll(".left");
const valuesLeft = Object.values(cursorLeft);
const cursorRight = document.querySelectorAll(".right");
const valuesRight = Object.values(cursorRight);
const ballImage = document.querySelectorAll(".ballimage");
const ballImageSum = Object.values(ballImage);


/*矢印クリック後の挙動*/
for(let i = 0; i < ballImageSum.length - 1; i++){
    valuesLeft[i].addEventListener("click", () => {
    console.log("左矢印がクリックされました！" + (i + 1));
    replaceAndCompare(i);
  })
    valuesRight[i].addEventListener("click", () => {
    console.log("右矢印がクリックされました！" + (i));
    replaceAndCompare(i);
  })
};

/*リセットボタン押下後の挙動*/
const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", () => {
  initAndReset();
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

/*矢印押下後、ボールの入れ替え~正解個数の更新まで一挙に引き受ける関数*/
const replaceAndCompare = (index) => {
  correctNums = 0;
  replaceBalls(index);
  renderCircle(balls);
  compareTwo(ballsInBox, balls);
  judge(correctNums);
}

/*初期画面&リセットボタン押下後 のシャッフル実行を引き受ける関数*/
const initAndReset = () => {
  do { 
    shuffleElements(ballsInBox); /*中のボールのシャッフル*/
    shuffleElements(balls); /*外のボールのシャッフル*/
    compareTwo(balls, ballsInBox); /*箱の中外の色の比較*/
  } while(correctNums !== 0); /*箱の中外で色一致がなくなるまで繰り返す*/
}

/*初期表示*/
initAndReset();
renderCircle(balls); /*シャッフル完了後のボール描画*/
console.log(ballsInBox);