
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log('経度:' + data.coord.lon);
console.log('緯度:' + data.coord.lat);
console.log('天気:' + data.weather[0].description	);
console.log('最高気温:' + data.main.temp_max);
console.log('最低気温:' + data.main.temp_min); 
console.log('湿度:' + data.main.humidity); 
console.log('風速:' + data.wind.speed); 
console.log('風向:' + data.wind.deg);
console.log('都市名:' + data.name);
}

function printDom(data) {
  let b = document.querySelector('#weather-results');
  b.innerHTML = ''; 
  let div = document.createElement('div');
  div.id = 'result';
  b.appendChild(div);
  let ul = document.createElement('ul');
  div.appendChild(ul);

  let li; 

  li = document.createElement('li');
  li.textContent = '経度: ' + data.coord.lon;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '緯度: ' + data.coord.lat;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '天気: ' + data.weather[0].description;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '最低気温: ' + data.main.temp_min;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '最高気温: ' + data.main.temp_max;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '湿度: ' + data.main.humidity;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '風速: ' + data.wind.speed;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '風向: ' + data.wind.deg;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = '都市名: ' + data.name;
  ul.appendChild(li);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

document.querySelector('#search-button').addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義

function sendRequest() {
  let key = document.querySelector('#city').value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + key + '.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}




// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if(typeof data === 'string'){
    data = JSON.parse(data);
  }

  printDom(data);

  console.log(data);

  console.log(data.x);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}



