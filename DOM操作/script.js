/*DOM練習問題*/

/*HTMLのボタン要素を取得*/
const button = document.getElementById("myButton");

button.addEventListener("click", () => {

  /*親要素の取得*/
  const parentElement = document.getElementById("list");

  /*子要素(リスト)の取得*/
  const child = document.createElement('li');

  /*親要素に子要素(リスト)を追加*/
  parentElement.appendChild(child);

  /*liタグのクラス名を命名*/
  child.classList.add('children');

  /*child(各リスト)内の子要素の取得*/
  const paragraph = document.createElement('div');
  const childDelete = document.createElement('button');

  /*子要素それぞれの中身の設定*/
  paragraph.textContent = "ボタンがクリックされました！";
  childDelete.textContent = "削除";

  /*リストにpタグを追加*/
  child.appendChild(paragraph);

  /*リストに削除ボタンを追加*/
  child.appendChild(childDelete);


  /*以下、削除ボタンがクリックされたあとのコマンド*/
  childDelete.addEventListener("click", (event) => {

    /*クリックを検知しているか調べるコード*/
    console.log("削除されました");

    /*削除ボタンの親要素を代入*/
    let parent = event.target.parentElement;

    /*親要素を削除*/
    parent.remove();

  });
});