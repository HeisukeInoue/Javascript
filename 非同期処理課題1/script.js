/*DOGAPIから画像を取得してくる関数*/
async function getData() {
  const imgURL = document.getElementById("dogimages");
  const loadingGIF = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif";
  imgURL.src = loadingGIF;
  const API_URL = "https://dog.ceo/api/breeds/image/random";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }
    const result = await response.json();
    imgURL.src = result.message;
  } catch (error) {
    console.error(error.message);
    imgURL.src = "";
  }
}

/*ボタンクリック時の挙動*/
const button = document.getElementById("getdogs");
button.addEventListener("click", () => {
  getData();
});

/*初期画面でも画像を取得してくる*/
getData();