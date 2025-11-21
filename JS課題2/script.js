/*算術演算子を使用して計算してみよう*/

/*1.合計点数を算出してください*/
const test = {
  国語: 100, 数学: 80, 英語: 75, 理科: 70, 社会: 80
};
let sum = 0;

for (let hoge in test) {
  sum += test[hoge];
}
console.log(sum);

/*2.引き算を使用して計算してください*/
console.log(100000 - 80000);

/*3.掛け算を使用して計算してください*/
console.log(32 * 64);

/*4.割り算を使用して計算してください*/
console.log(10 / 2);

/*5.インクリメント演算子を使用してください*/
let num = 3;
num += 1;
console.log(num);

/*6.デクリメント演算子を使用してください*/
let number = 0;
number -= 1;
console.log(number);

/*条件分岐を練習してみよう*/

/*1.if文を使用して所持金を比較してください*/
const numA = 8000;
const numB = 12000;
if (numA > numB) {
  console.log(numA);
} else {
  console.log(numB);
}

/*2.if文を使用して誰が最も所持金を持っているかを表示してください*/
const moneyA = 8000;
const moneyB = 12000;
const moneyC = 3000;

if (moneyA > moneyB){
  if (moneyC > moneyA){
    console.log(moneyC);
  } else {
    console.log(moneyA);
  }
}

else {
  if (moneyC > moneyB){
    console.log(moneyC);
  } else {
    console.log(moneyB);
  }
}

/*3.点数に応じてメッセージをアラート表示してください*/
const point = 100;

if (point === 100) {
  alert("満点！！");
} else if (point >= 80) {
  alert("合格です");
} else if (point <=  30) {
  alert("赤点です");
} else {
  alert("不合格です");
}

/*4.switch文を使用して入力値に応じた結果を表示してください*/
let day = "todouhukenn";
switch (day) {
  case "saitama":
    console.log("埼玉");
    break;
  case "tokyo":
    console.log("東京");
    break;
  case "kanagawa":
    console.log("神奈川");
  default:
    console.log("未確認");
}  

/*5.Mathクラスを使ってみよう*/

/*1.ランダムな値を生成してください*/
const randomInt = Math.floor(Math.random () * 10) + 1;
console.log(randomInt);

/*2.最も高い数値を見つけてください*/
console.log(Math.max(1, 4, 6));

/*3.最も低い数値を見つけてください*/
console.log(Math.min(1, 4, 6));

/*for文を使用してループ処理を練習しましょう*/

/*1.「実行」を10回表示してください*/
for (let i = 0; i <= 9; i++) {
  console.log("実行");
}

/*2.配列の中身を表示してください*/
const fruits = ['apple', 'banana', 'cat'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*3.配列の合計を計算してください*/
const numbersOne = [1, 2, 3,];
let sumNum = 0;
for (let i = 0; i < numbersOne.length; i++) {
  sumNum += numbersOne[i];
}
console.log(sumNum);

/*4.配列を分割してください*/
const numAndStrings = [1, 'hoge', 2, 'huga', 3, 'piyo'];
const strings = [];
const numbers = [];

for (let i = 0; i < numAndStrings.length; i++){
  const targetContent = numAndStrings[i];
  if (typeof targetContent === "string"){
    strings.push(targetContent);
  } else {
    numbers.push(targetContent);
  }
}
console.log(strings);
console.log(numbers);

/*5.奇数のみ足し算してください*/
let oddSum = 0;
for (let i = 1; i <= 100; i++){
  if (!(i % 2)) continue;
  else oddSum += i;
}
console.log(oddSum);

/*他の繰り返し文を使ってみましょう*/

/*1.foreachを使ってループ処理を試してみましょう*/
const fruit = ['apple', 'banana', 'cat'];
fruit.forEach(function(value){
  console.log(value);
});

/*2.while文を使ってループ処理を試してみましょう*/
let count = 0;
while(count <= 9){
  let countNow = count + 1;
  let countStr = String(countNow);
  console.log("実行"+ countStr);
  count++;
}

/*3.繰り返し文の用途を調べてみましょう*/

/*for文：繰り返し回数が決まっている時に使う*/
let combiYears = 1;
const maxYears = 15;
for (let i = combiYears; i <= maxYears; i++){
  console.log("会場を爆笑の渦に包んだ");
  if (i == maxYears) {
    console.log("M-1グランプリ優勝!!")
  }
}

/*foreach文：コレクションの要素を順番に処理する時に使う*/
const championHistory = ["ミルクボーイ", "マジカルラブリー", "ウエストランド", "錦鯉", "令和ロマン"];
const imadaKouji = "優勝は!!";
championHistory.forEach((value) => console.log(imadaKouji + value));

/*while文：条件を満たしている間繰り返す*/
let loveScale = 0;
while (loveScale <= 100){
  console.log("私たち付き合ってます");
  if (loveScale === 100){
    console.log("夫婦として!");
  }
  loveScale += 20;
}

/*配列メソッドを練習しましょう*/

/*1.mapメソッドを使用してください*/
const evenNum = [2, 4, 6, 8];
const calcResult = evenNum.map((value) => {
  return value * 2;
});
console.log(calcResult);

/*2.someメソッドを使用してください*/
const nums = [2, 4, 6, 7];
const searchResult = nums.some((value) => {
  return value % 2 !== 0;
});
console.log(searchResult);

/*3.everyメソッドを使用してください*/
const student = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
]
const submitResult =  student.every((value) => {
  return value.hasSubmitted === true;
});
console.log(submitResult);

/*4.filterメソッドを使用してください*/
const newStudent = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
]
const newResult = newStudent.filter((value) => {
  return value.hasSubmitted === true;
});
console.log(newResult);

/*5.sortメソッドを使用してください*/
const robots = [
  { id: 323, hasSubmitted: true },
  { id: 111, hasSubmitted: false },
  { id: 268, hasSubmitted: true },
]
let finalResult = robots.sort(function(a, b) {
  return (a.id < b.id) ? -1 : 1;
});
console.log(finalResult);