const button = document.getElementById('search');
const inputarea = document.getElementById('pokeID');
const initLogMessage = document.getElementById('initiallog');
initLogMessage.innerText = '履歴無し';
let pokeLogs = [];

if (inputarea.value === '') {
	button.disabled = true;
}

inputarea.addEventListener('input', () => {
	button.disabled = false;
	if (inputarea.value === '') {
		button.disabled = true;
	}
});

button.addEventListener('click', () => {
	getPokeData();
});

async function getPokeData() {
	const idNumber = inputarea.value; /*入力されたID数値を格納する変数*/
	const errorMessage = document.getElementById('errorText');
	loadings(true);
	try {
		// await: fetchが完了するまで一時停止
		const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${idNumber}`;
		const response = await fetch(pokeAPI);

		if (!response.ok) {
			// 失敗時、ここでエラーを投げる
			throw new Error('HTTPエラー');
		}
		// await: JSONの解析が完了するまで一時停止
		loadings(false);
		errorMessage.innerText = '';
		const data = await response.json();

		const { sprites, name, id, types, height, weight } = data;

		const pokeTypesElement = document.getElementById('types');
		pokeTypesElement.innerText = 'タイプ: ' + types[0].type.name;
		if (types[1]) {
			pokeTypesElement.innerText += ',' + types[1].type.name;
		}

		const pokeIMAGE = document.getElementById('img');
		pokeIMAGE.src = sprites.front_default;
		makeEachList('name', '名前: ', name, '');
		makeEachList('id', 'ID: ', id, '');
		makeEachList('weight', '重さ: ', weight, 'kg');
		makeEachList('height', '高さ: ', height, 'm');
		getPokeLog(id, name);
	} catch (error) {
		// catch: 投げられたエラーを捕捉する
		console.error('非同期エラー:', error.message);
		errorMessage.innerText = 'ID' + idNumber + 'というポケモンは存在しません。';
		loadings(false);
		// return null; などのエラー後の処理
	}
}

const getPokeLog = (pokeID, pokename) => {
	const logList = document.getElementById('log');
	logList.innerHTML = '';

	const logText = 'ID' + pokeID + ': ' + pokename;
	pokeLogs.unshift(logText);

	initLogMessage.innerText = '';

	for (let i = 0; i < pokeLogs.length; i++) {
		const logNameAndID = document.createElement('li');
		logNameAndID.innerText = pokeLogs[i];
		logList.appendChild(logNameAndID);
	}
};

const makeEachList = (eachid, category, value, unit) => {
	const eachList = document.getElementById(eachid);
	eachList.innerText = category + value + unit;
};

const loadings = (bool) => {
	const loadingIMG = document.getElementById('loadingIMG');
	if (bool) {
		loadingIMG.style.display = 'block';
		loadingIMG.src = 'https://usagif.com/wp-content/uploads/loading-96.gif';
	} else {
		loadingIMG.style.display = 'none';
	}
};
