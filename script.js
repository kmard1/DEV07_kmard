// Create variables
var greetingIs = "[not initialized]";
var name = " [not initialized]";
var message = " [not initialized]";
var welcome = greetingIs + name + message;
var sign = "[not initialized]";
var tiles = 0;
var subTotal = 0;
var shipping = 0;
var grandTotal = " ";
var setText = " ";
var elSign = " ";
var dollarSign = "$";

function setVars() {
  greetingIs = "Howdy ";
  name = "Molly";
  message = ", please check your order:";
  welcome = greetingIs + name + message;
}

function setTextContentById(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = setText;
}
setVars();
setTextContentById("greeting", welcome);

function setTextByIdDollar(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = dollarSign + setText;
}

function getCustomerSign() {
  sign = "Montague House";
}
getCustomerSign();
setTextContentById("userSign", sign);


function getTiles() {
  tiles = sign.length;
}
getTiles();
setTextContentById("tiles", tiles);
function getSubtotal() {
  subTotal = tiles * 5;
}
getSubtotal();
setTextByIdDollar("subTotal", subTotal);

function getShipping() {
  shipping = 7;
}
getShipping();
setTextByIdDollar("shipping", shipping);

function getGrandTotal() {
  grandTotal = subTotal + shipping;
}
getGrandTotal();
setTextByIdDollar("grandTotal", grandTotal);

function initVars(e) {
  greetingIs = "[not initialized]";
  name = " [not initialized]";
  message = " [not initialized]";
  welcome = greetingIs + name + message;
  sign = "[not initialized]";
  tiles = 0;
  subTotal = 0;
  shipping = 0;
  grandTotal = " ";
  setText = " ";
  elSign = " ";
  dollarSign = "$";
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextByIdDollar("subTotal", subTotal);
  setTextByIdDollar("shipping", shipping);
  setTextByIdDollar("grandTotal", grandTotal);
  
  if(e.preventDefault()){
   e.preventDefault();
  } else{
    return false;
  }

}

var clearButton = document.getElementById("myBtn");
clearButton.addEventListener(
 'click', function(e){initVars(e)},false);