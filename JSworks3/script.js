/*JSONとJavaScriptオブジェクトの相互変換*/

/*1.JSON文字列をJavaScriptオブジェクトに変換しましょう*/
const jsonString = '{"Name":"Taro", "Age":42, "gender": "male"}';
const obj = JSON.parse(jsonString);
console.log(obj.Name);

/*2.JavaScriptオブジェクトをJSON文字列に変換しましょう*/
const jsObj = { Name: "Taro", Age: 13, gender: "male" };
const json = JSON.stringify(jsObj);
console.log(json);

/*フォームバリデーションを実装しましょう*/

/*1.名前*/
const nameInput = document.getElementById("name");
const nameError = "正しい名前を入力してください";
const nameAlert = document.getElementById("nameResult");
nameAlert.innerText = nameError;
document.getElementById("name").addEventListener("input", function(){
    const regex = /^[^ -~｡-ﾟ]+$/;
    if ((regex.test(nameInput.value))) {
      nameAlert.innerText = "";
    } else {
      nameAlert.innerText = nameError;
    };
  })

/*2.年齢*/
const ageInput = document.getElementById("age");
const ageError = "正しい年齢を入力してください";
const ageAlert = document.getElementById("ageResult");
ageAlert.innerText = ageError;
document.getElementById("age").addEventListener("input", function(){
    if (isNaN(ageInput.value) || ageInput.value.trim() === "") {
      ageAlert.innerText = ageError;
    } else {
      ageAlert.innerText = "";
    };
})

/*3.メールアドレス*/
const emailInput = document.getElementById("email");
const emailError = "正しいメールアドレスを入力してください";
const emailAlert = document.getElementById("emailResult");
emailAlert.innerText = emailError;
document.getElementById("email").addEventListener("input", function(){
    const regexOne = /^\w+@\w+\.\w+$/;
    const regexTwo = /@/;
    const regexThree = /^[ -~｡-ﾟ]+$/;

    const isOneTrue = regexOne.test(emailInput.value);
    const isTwoTrue = regexTwo.test(emailInput.value);
    const isThreeTrue = regexThree.test(emailInput.value);

    if (!isOneTrue||!isTwoTrue||!isThreeTrue) {
      emailAlert.innerText = emailError;
    } else {
      emailAlert.innerText = "";
    };
  })

/*4.電話番号*/
const phoneInput = document.getElementById("phone");
const phoneError = "正しい電話番号を入力してください";
const phoneAlert = document.getElementById("phoneResult");
phoneAlert.innerText = phoneError;
document.getElementById("phone").addEventListener("input", function(){
    const isOneTrue = phoneInput.value.length === 11;
    const isTwoTrue = !isNaN(phoneInput.value) && phoneInput.value.trim() !== "";
    
    if (!isOneTrue||!isTwoTrue) {
      phoneAlert.innerText = phoneError;
    } else {
      phoneAlert.innerText = "";
    };
  })

