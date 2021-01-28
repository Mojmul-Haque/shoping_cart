//plus button event


function clickBtn(btnId, showQuantityId, productPriceId, subtotalPriceId, taxId, totalShopingId) {
    const plusBtn = document.getElementById(btnId);
    plusBtn.addEventListener('click', function() {

        updateValue(showQuantityId);

        // update product price;
        updateSpan(productPriceId, 300)

        //update sub total price;
        var currentSubTotalPrice = updateSpan(subtotalPriceId, 300);

        // update tax;
        var getTax = updateSpan(taxId, 1)

        // total shoping price
        totalShopingPrice(totalShopingId, getTax, currentSubTotalPrice)
    })
}

clickBtn('plus_btn', 'show_quantity', 'product_price', 'sub_total_price', 'tax', 'total_shoping')


function updateValue(id) {
    const showQuantity = document.getElementById(id).value;
    const convertNumber = parseInt(showQuantity)
    const currentNumber = convertNumber + 1;
    if (currentNumber == 0) {
        return 1;
    }
    document.getElementById(id).value = currentNumber;

}

// update span value;

function updateSpan(id, productPrice) {
    const getId = document.getElementById(id).innerText;
    const convertNumber = parseFloat(getId);
    const totalPrice = convertNumber + productPrice
    document.getElementById(id).innerText = totalPrice;
    return totalPrice
}

function totalShopingPrice(id, getTax, currentSubTotalPrice) {
    const totalShoping = document.getElementById(id).innerText;
    const convertTotalShoping = parseFloat(totalShoping);
    const payTotalShiping = getTax + currentSubTotalPrice
    document.getElementById(id).innerText = payTotalShiping;
}

// minus button