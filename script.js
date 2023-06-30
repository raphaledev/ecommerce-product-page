let main = document.getElementsByTagName('main')[0];
let imgProduct = document.getElementById('img-product');
let newImgProduct = document.getElementById('new-img-product');
const thumbs = document.querySelectorAll('.thumb')
let containerLeft = document.querySelector('.container-left');
let newContainer = document.querySelector('.new-container');
let iconMenu = document.querySelector('.icon-menu-hamburger');
let iconClose = document.querySelector('.icon-close');
let divPrevious = document.querySelector('.div-previous');
let divNext = document.querySelector('.div-next');
let mobileDivPrevious = document.querySelector('.mobile-div-previous');
let mobileDivNext = document.querySelector('.mobile-div-next');
let mobilePrevNext = document.querySelector('.mobile-prev-next');
let closeCarousel = document.querySelector('.close-carousel');
let navLinks = document.querySelector('.nav-links');
let iconCart = document.querySelector('.cart');
let cartCard = document.querySelector('.cart-card');
let cartEmpty = document.querySelector('.cart-empty');
let mask = document.querySelector('.mask');
let addToCartQty = document.getElementById('input-number');
let addToCart = document.getElementById('add-to-cart');
let iconDelete = document.getElementById('icon-delete');
let cartQty = document.getElementById('cart-qty');
let buttonPlus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus');
let cartSummary = document.getElementById('cart-summary');
let checkout = document.getElementById('checkout');
let totalPrice = document.getElementById('total-price');

const thumbnails = ["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg"];
const gallery = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

const minus = function () {
    this.parentNode.querySelector('input[type=number]').stepDown()
}

const plus = function () {
    this.parentNode.querySelector('input[type=number]').stepUp()
}

const updateCartQty = () => {
    addToCartQty.value > 0 ? cartQty.innerText = addToCartQty.value : cartQty.innerText = '';
    cartSummary.innerText = `$125.00 x ${addToCartQty.value}`;
    totalPrice.innerText = ` $${125*addToCartQty.value}`;
}

const showCart = (cart) => {
    cart.style.display = 'flex';
}

const hideCart = (cart) => {
    cart.style.display = 'none';
}

iconDelete.addEventListener('click', () => {
    addToCartQty.value = 0;
    cartQty.innerText = '';
    hideCart(cartCard);
});


thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        newContainer.classList.add('show');
        mask.style.visibility = 'visible';
        const thumbSrc = thumb.getAttribute('src');
        const index = thumbnails.indexOf(thumbSrc);
        newImgProduct.src = gallery[index];
    });
});


function showMenu (){
    navLinks.classList.remove('hide');
    cartCard.style.display = 'none';
    cartEmpty.style.display = 'none';
}

function hideMenu (){
    navLinks.classList.add('hide');
}

function hideCarousel () {
    newContainer.classList.remove('show');
    mask.style.visibility = 'hidden';
}

function nextImage () {
    const currentImage = newImgProduct.getAttribute('src');
    const currentIndex = gallery.indexOf(currentImage);
    currentIndex < 3 ? newImgProduct.src = gallery[currentIndex+1] : newImgProduct.src = gallery[0];
}

function previousImage () {
    const currentImage = newImgProduct.getAttribute('src');
    const currentIndex = gallery.indexOf(currentImage);
    currentIndex > 0 ? newImgProduct.src = gallery[currentIndex-1] : newImgProduct.src = gallery[3];
}

function nextMobileImage () {
    const currentImage = imgProduct.getAttribute('src');
    const currentIndex = gallery.indexOf(currentImage);
    currentIndex < 3 ? imgProduct.src = gallery[currentIndex+1] : imgProduct.src = gallery[0]; 
}

function PreviousMobileImage () {
    const currentImage = imgProduct.getAttribute('src');
    const currentIndex = gallery.indexOf(currentImage);
    currentIndex > 0 ? imgProduct.src = gallery[currentIndex-1] : imgProduct.src = gallery[3];
}


buttonMinus.addEventListener('click', minus);
buttonPlus.addEventListener('click', plus);
addToCart.addEventListener('click', updateCartQty);
iconMenu.addEventListener('click', showMenu);
iconClose.addEventListener('click', hideMenu);
closeCarousel.addEventListener('click', hideCarousel);
iconCart.addEventListener('click', () => cartQty.innerText != '' ? showCart(cartCard) : showCart(cartEmpty));
checkout.addEventListener('click', () => hideCart(cartCard));
cartEmpty.addEventListener('click', () => hideCart(cartEmpty));
main.addEventListener('click', () => hideCart(cartEmpty));
divPrevious.addEventListener('click', previousImage);divNext.addEventListener('click', nextImage);
divNext.addEventListener('click', nextImage);
mobileDivNext.addEventListener('click', nextMobileImage);
mobileDivPrevious.addEventListener('click', PreviousMobileImage);

