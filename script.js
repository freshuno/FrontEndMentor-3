var minus = document.getElementById("buttonminus");
var plus = document.getElementById("buttonplus");
var bigphoto = document.getElementById("bigphoto");
const cartbutton = document.getElementById("cart");
var bigpicture = document.getElementById("bigpicture");
var amount = 0;
/* tego jednak nie trzeba 
bigphoto.addEventListener("click", function(){
     bigpicture.style.display = "block";
}) */
plus.addEventListener("click", function(){
    amount = amount + 1;
    document.getElementById("buttonp").innerHTML = amount;
})
minus.addEventListener("click", function(){
    if(amount>0){
    amount = amount - 1;
    document.getElementById("buttonp").innerHTML = amount;
    }
})
//KOSZYK
cartbutton.addEventListener("click", function(){
    document.querySelector(".cartmenu").classList.toggle("cartdisplay");
})
