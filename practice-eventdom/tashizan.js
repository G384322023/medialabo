function sum() {
  let a = document.querySelector('input[name="left"]');
  let A = a.value; 

  let b = document.querySelector('input[name="right"]');
  let B = b.value; 

  let c = document.querySelector('span#answer');

 
  c.textContent = +A + +B;
}

let d = document.querySelector("button#calc");
d.addEventListener('click', sum); 