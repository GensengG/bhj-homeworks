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
        const parentElemId = Number(parentElem.dataset.id);
        const imgElem = productImage[parentElem.dataset.id - 1];
        const imgElemSrc = imgElem.src;
        let quantityValue = Number(productQuantityValue[parentElem.dataset.id - 1].textContent);
        let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
        let productCount = Array.from(document.querySelectorAll(".cart__product-count"));

        let productsInBasketId = [];
        cartProduct.forEach((elem) => {
            productsInBasketId.push(elem.dataset.id);
        })

        if(productsInBasketId.includes(parentElem.dataset.id)){
            let newQuantityValue = quantityValue;
            newQuantityValue ++;
            let count = Number(productCount[parentElem.dataset.id - 1].textContent);
            productQuantityValue[parentElem.dataset.id - 1].textContent = `${newQuantityValue}`;
            productCount[parentElem.dataset.id - 1].textContent = `${newQuantityValue}`;
            console.log(count)

        } else {
            cartProducts.insertAdjacentHTML("beforeEnd",`
                <div class="cart__product" data-id=${parentElemId}>
                    <img src=${imgElemSrc} alt class="cart__product-image">
                    <div class="cart__product-count">${quantityValue}</div>
                </div>
            `)
        }
    })
})
