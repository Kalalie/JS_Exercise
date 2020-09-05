window.onload = function(){
let number = document.getElementById('count');
console.log(number.innerText)

}
var number = 1;
var count = document.getElementById('count');

function increment(){
    console.log("Increase by 1")
    // start
    number++;
    count.innerHTML = number;
  }

function decrement(){
    console.log( "Decrease by 1")
    number--;
    count.innerHTML = number;
}
    // end
