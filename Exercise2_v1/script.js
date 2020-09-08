// window.onload = function(){
//   let item = document.getElementById('item');
//   console.log(item.innerText)
// }

var item = {}
var item = document.getElementById('item');

function AddToCart(Item, Price) {
    let cart = document.getElementById('ShoppingCart');
    console.log("Add to cart")
    item ++
    item.innerHTLM = item;
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`${Item} $${Price}`);        
    node.appendChild(textnode);
    cart.appendChild(node);
}