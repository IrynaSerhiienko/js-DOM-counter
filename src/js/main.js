// 1: не можна виходити в мінус
// 2: каунтер не більше кількості єлементів масиву
// 3: при натисканні - видаляти юзера

// Екстра
// реалізація корзини

const arr = ["user 0", "user 1", "user 2", "user 3", "user 4"];

const bag = [];
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let out = document.querySelector("span");
let out2 = document.querySelector(".out2");

let counter = 0;
let el = arr.shift();
plus.onclick = () => {
  //   out2.innerHTML = "";

  out2.append(`${el}__`);
  if (counter !== arr.length) {
    out.innerHTML = ++counter;
  }

  //    {
  //
};

minus.onclick = () => {
  //   out2.parentNode.removeChild(list);
  if (counter !== 0) out.innerHTML = --counter;
  //   out2.innerHTML = "";
  out2.parentNode.removeChild(el);
};
