var minus = document.getElementById("buttonminus");
var plus = document.getElementById("buttonplus");
var bigphoto = document.getElementById("bigphoto");
const cartbutton = document.getElementById("cart");
var bigpicture = document.getElementById("bigpicture");
var closebutton = document.getElementById("close");
const smallPhotos = document.querySelectorAll(".smallphoto");
var smallPhotosClass = document.getElementsByClassName("smallphoto")
var bigPhotoImg = document.getElementById("bigphotoimg");
var amount = 0;

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
 //ZMIENIANIE PODLGADU ZDJECIA testt
var firstSmallPhoto = smallPhotosClass[0];
var secondSmallPhoto = smallPhotosClass[1];
var thirdSmallPhoto = smallPhotosClass[2];
var fourthSmallPhoto = smallPhotosClass[3];
firstSmallPhoto.addEventListener("click", function(){
    bigPhotoImg.src="img/image-product-1.jpg";  
})
secondSmallPhoto.addEventListener("click", function(){
    bigPhotoImg.src="img/image-product-2.jpg";
})
thirdSmallPhoto.addEventListener("click", function(){
    bigPhotoImg.src="img/image-product-3.jpg";
})
fourthSmallPhoto.addEventListener("click", function(){
    bigPhotoImg.src="img/image-product-4.jpg";
})
var hugePreviewPhoto = document.getElementById("hugephoto1");

bigphoto.addEventListener("click", function(){
    hugePreviewPhoto.src=bigPhotoImg.src;
    bigpicture.style.display = "block";
})
closebutton.addEventListener("click", function(){
    bigpicture.style.display ="none";
})
 


