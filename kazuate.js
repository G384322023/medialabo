// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let b = document.querySelector("#print");
b.addEventListener("click", hantei); 

function hantei() {
  let i = document.querySelector("#y");
  let yoso = parseInt(i.value);


  kaisu++;

  document.querySelector("span#kaisu").textContent = kaisu;
  document.querySelector("span#answer").textContent = yoso;

  let result = document.querySelector("#result");
if (kaisu >= 4) {
  result.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
} else if (yoso === kotae) {
  result.textContent = '正解です。おめでとう！';
  kaisu = 4;  
} else if (kaisu === 3) {
  result.textContent ='まちがい、残念でした。答えは ' + kotae + ' です。';
} else if (yoso > kotae) {
  result.textContent ='まちがい．答えはもっと小さいですよ';
} else {
  result.textContent='まちがい．答えはもっと大きいですよ';
}
console.log(kaisu + '回目の予想: ' + yoso);

}