var minus = document.getElementById("buttonminus");
var plus = document.getElementById("buttonplus");
var bigphoto = document.getElementById("bigphoto");
const cartbutton = document.getElementById("cart");
var bigpicture = document.getElementById("bigpicture");
var closebutton = document.getElementById("close");
const smallPhotos = document.querySelectorAll(".smallphoto");
var amount = 0;
bigphoto.addEventListener("click", function(){
     bigpicture.style.display = "block";
})
closebutton.addEventListener("click", function(){
    bigpicture.style.display ="none";
})
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
//ZMIENIANIE FOCUSU NA SMALLPHOTO
 smallPhotos.forEach(link => {
    link.addEventListener("click", () => {
        smallPhotos.forEach(link1 => {
            if (link1.classList.contains('active')){
                link1.classList.remove('active');
            }
        })
        link.classList.add("active");
    })
 })

 //JAK ZROBIC ZEBY ZMIENIALO SIE ZDJECIE GLOWNE KIEDY SIE KLIKNIE MALE?
