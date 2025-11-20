/*変数を宣言してみよう*/

/*1.文字列を格納する変数を宣言してください*/
const string = "hoge";
console.log(string);

/*2.数値を格納する変数を宣言してください*/
const num = 69;
console.log(num);

/*3.真偽値を格納する変数を宣言してください*/
const bool = false;
console.log(bool);

/*4.未定義の状態で変数を宣言してください*/
let x;
console.log(x);

/*5.null を格納する変数を宣言してください*/
const number = null;
console.log(number);

/*6.文字列の配列を作ってみよう*/
const ourname = ["田中", "佐藤", "久保田", "鈴木", "河本"];
for (let i = 0; i < ourname.length; i++){
  console.log(ourname[i]);
}

/*7.オブジェクトを宣言してみよう*/
const profile = {
  id: 1,
  name: 'yourName',
  old: 20
};
console.log(profile.name);

/*関数を作ってみよう*/

/*1.関数を宣言してみよう*/
function greet() {
};

/*2.アロー関数を宣言してみよう*/
const add = () => {
};

/*3.引数を受け取って表示する関数を作りましょう*/
function simply(num) {
  console.log(num);
}
simply(157);

/*4.計算をする関数を作りましょう*/
function calc(a,b) {
  return a + b;
};
let result = calc(123,1234);
console.log(result);

/*5.文字列を結合する関数を作りましょう*/
const addstring = (a,b) => a + b;
console.log(addstring("super","handsome"));

/*DOM操作を練習してみよう*/

/*1.IDを使ってDOMを取得しましょう*/
const chal = document.getElementById("challenge");
console.log(chal.textContent);

/*2.セレクターを使ってDOMを取得しましょう*/
const howToo = document.querySelector(".howto");
howToo.textContent = "かいぜんほうほう"
console.log(howToo.textContent);

/*3.新しい要素を作成しましょう*/
const paragraph1 = document.createElement("p")
paragraph1.textContent = "成長中"

/*4.作成した要素を追加してみよう*/
chal.appendChild(paragraph1);
console.log(paragraph1);

/*イベントハンドリングの練習*/

/*1.ボタンにクリックイベントを付与しましょう*/
const button = document.getElementById("lifeReset");
button.addEventListener("click", () => {
  console.log("click");
});

/*2.スクロールイベントを設定しましょう*/
const page = document.getElementById("wholepage");
window.addEventListener("scroll", () => {
  console.log("scroll");
});

/*3.ボタンクリックで子要素を追加しましょう*/
button.addEventListener("click", () => {
  const message = document.createElement("div");
  message.textContent = "あなたの来世はカエルです！";
  buttonarea.appendChild(message);
});