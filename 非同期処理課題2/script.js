const button = document.getElementById("search");
const inputarea = document.getElementById("pokeID");
const initLogMessage = document.getElementById("initiallog");
initLogMessage.innerText = "履歴無し";
let pokeLogs = [];

if (inputarea.value === "") {
  button.disabled = true;
}

inputarea.addEventListener("input", () => {
  button.disabled = false;
  if (inputarea.value === "") {
    button.disabled = true;
  }
});

button.addEventListener("click", () => {
  getPokeData();
  getPokeLog();
});

async function getPokeData() {
  const idNumber = inputarea.value; /*入力されたID数値を格納する変数*/
  const loadingIMG = document.createElement("img");
  loadingIMG.classList.add("loadings");
  loadingIMG.src = "https://usagif.com/wp-content/uploads/loading-96.gif";
  const infos = document.getElementById("infos");
  infos.appendChild(loadingIMG);
  const errorMessage = document.getElementById("errorText");
  try {
    // await: fetchが完了するまで一時停止
    const pokeAPI = "https://pokeapi.co/api/v2/pokemon";
    const eachID = "/" + idNumber + "/";
    const pokeeachID =
      pokeAPI +
      eachID; /*それぞれのIDポケモンのデータが個別に格納されているリンク*/
    const response = await fetch(pokeeachID);

    if (!response.ok) {
      // 失敗時、ここでエラーを投げる
      throw new Error("HTTPエラー");
    }

    // await: JSONの解析が完了するまで一時停止
    loadingIMG.remove();
    errorMessage.innerText = "";
    const data = await response.json();
    const pokeIMG = data.sprites.front_default;
    const pokeName = data.name;
    const pokeID = data.id;
    const poketypes = data.types;
    const pokeheight = data.height * 100;
    const pokeweight = data.weight / 100;

    const pokeTypes = document.getElementById("types");
    pokeTypes.innerText = "タイプ: " + poketypes[0].type.name;
    for (let i = 1; i < poketypes.length; i++) {
      pokeTypes.innerText += "," + poketypes[i].type.name;
    }

    const pokeIMAGE = document.getElementById("img");
    pokeIMAGE.src = pokeIMG;

    const listName = document.getElementById("name");
    listName.innerText = "名前: " + pokeName;

    const listID = document.getElementById("id");
    listID.innerText = "ID: " + pokeID;

    const listWeight = document.getElementById("weight");
    listWeight.innerText = "重さ: " + pokeweight + "kg";

    const listHeight = document.getElementById("height");
    listHeight.innerText = "高さ: " + pokeheight + "cm";
  } catch (error) {
    // catch: 投げられたエラーを捕捉する
    console.error("非同期エラー:", error.message);
    errorMessage.innerText = "ID" + idNumber + "というポケモンは存在しません。";
    loadingIMG.remove();
    // return null; などのエラー後の処理
  }
}

async function getPokeLog() {
  const inputNumber = document.getElementById("pokeID");
  const idNumber = inputNumber.value; /*入力されたID数値を格納する変数*/
  try {
    // await: fetchが完了するまで一時停止
    const pokeAPI = "https://pokeapi.co/api/v2/pokemon";
    const eachID = "/" + idNumber + "/";
    const pokeeachID =
      pokeAPI +
      eachID; /*それぞれのIDポケモンのデータが個別に格納されているリンク*/
    const response = await fetch(pokeeachID);

    if (!response.ok) {
      // 失敗時、ここでエラーを投げる
      throw new Error("HTTPエラー");
    }

    // await: JSONの解析が完了するまで一時停止
    const data = await response.json();
    const pokeName = data.name;
    const pokeID = data.id;

    const logList = document.getElementById("log");
    logList.innerHTML = "";

    const logText = "ID" + pokeID + ": " + pokeName;
    pokeLogs.unshift(logText);

    initLogMessage.innerText = "";

    for (let i = 0; i < pokeLogs.length; i++) {
      const logNameAndID = document.createElement("li");
      logNameAndID.innerText = pokeLogs[i];
      logList.appendChild(logNameAndID);
    }
  } catch (error) {
    // catch: 投げられたエラーを捕捉する
    console.error("非同期エラー:", error.message);
    // return null; などのエラー後の処理
  }
}
