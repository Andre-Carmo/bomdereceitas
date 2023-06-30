const buttom = document.querySelectorAll(".material-symbols-outlined");
const counter = document.querySelector(".counter")
var number = 1

for (var i = 0; i < buttom.length; i++) {
  buttom[i].addEventListener("click", function (e) {
    var onclick =  this.innerHTML;
    if (onclick == "add_circle") {
      number += 1
      escrita(number)
    }
    else if( onclick == "do_not_disturb_on" && number != 1) {
      number -= 1
      escrita(number)
    }
      mudarLista(number)
  })
}

function escrita (val) {
  if (val < 10) {
    counter.innerHTML = `0${String(val)}`
  }
  else {
    counter.innerHTML = val
  }  
  
}

function mudarLista(valor) {
  let val = 1 * valor 
  document.querySelector("ul").innerHTML = `
  <li>${val} espiga de milho verde;
  <li>${val} colher de sopa de açúcar;
  <li>${val} colher de sopa de manteiga;
  <li>Sal a gosto;
  <li>Palha de milho (para embrulhar).`
}