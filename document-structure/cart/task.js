const plusQuantity = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const minusQuantity = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const addProduct = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");
const productImage = document.querySelectorAll(".product__image");
let productQuantityValue = document.querySelectorAll(".product__quantity-value");

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

addProduct.forEach((elem) => {
    elem.addEventListener("click", () => {
        const parentElem = elem.closest(".product");
        const prevSibling = elem.previousElementSibling;
        const prevSiblingCoun = prevSibling.children[1].textContent;
        const parentElemId = Number(parentElem.dataset.id);
        const imgElem = productImage[parentElem.dataset.id - 1];
        const imgElemSrc = imgElem.src;
        let quantityValue = Number(productQuantityValue[parentElem.dataset.id - 1].textContent);
        let cartProduct = Array.from(document.querySelectorAll(".cart__product"));

        let productInBasket = cartProduct.find((cart) => Number(cart.dataset.id) === parentElemId);
        console.log(productInBasket);

        if(productInBasket){
            let oldCount = Number(productInBasket.children[1].textContent);
            let addedCount = Number(prevSiblingCoun);
            let newQuantityValue = oldCount + addedCount;
            productQuantityValue[parentElem.dataset.id - 1].textContent = 1;
            productInBasket.children[1].textContent = `${newQuantityValue}`;
        } else {
            cartProducts.insertAdjacentHTML("beforeEnd",`
                <div class="cart__product" data-id=${parentElemId}>
                    <img src=${imgElemSrc} alt class="cart__product-image">
                    <div class="cart__product-count">${quantityValue}</div>
                </div>
            `)
            productQuantityValue[parentElem.dataset.id - 1].textContent = 1;
        }
    })
})
