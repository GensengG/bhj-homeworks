const plusQuantity = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const minusQuantity = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const addProduct = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");
const productImage = document.querySelectorAll(".product__image");
const productQuantityValue = document.querySelectorAll(".product__quantity-value");

plusQuantity.forEach((elem) => {
    elem.addEventListener("click", () => {
        let quantity = Number(elem.previousElementSibling.textContent);
        quantity = quantity + 1;
        elem.previousElementSibling.textContent = `${quantity}`;
    })
})

minusQuantity.forEach((elem) => {
    elem.addEventListener("click", () => {
        let quantity = Number(elem.nextElementSibling.textContent);
        if(quantity > 1) {
            quantity = quantity - 1;
            elem.nextElementSibling.textContent = `${quantity}`;
        }
    })
})

function createCartInBasket(elem){
    let productsInBasket = Array.from(cartProducts.children);
    const parentElem = elem.closest(".product");
    const parentElemClone = parentElem.cloneNode(false);
    parentElemClone.classList.remove("product");
    parentElemClone.classList.add("cart__product");

    const imgElem = productImage[parentElem.dataset.id - 1];
    const imgElemClone = imgElem.cloneNode(false);
    imgElemClone.classList.remove("product__image");
    imgElemClone.classList.add("cart__product-image");

    const cartProductCount = document.createElement("div");
    cartProductCount.classList.add("cart__product-count");
    let quantityValue = productQuantityValue[parentElem.dataset.id - 1].textContent;
    cartProductCount.textContent = `${quantityValue}`;

    let productsInBasketId = [];
    productsInBasket.forEach((elem) => {
        productsInBasketId.push(elem.dataset.id);
    })

    if(!productsInBasketId.includes(parentElem.dataset.id)){
        parentElemClone.appendChild(imgElemClone);
        parentElemClone.appendChild(cartProductCount); 
        cartProducts.appendChild(parentElemClone.cloneNode(true));
    }

}

addProduct.forEach((elem) => {
    elem.addEventListener("click", () => {
        createCartInBasket(elem);
    })
})
