//plus button event
const plusBtn = document.getElementById('plus_btn');
plusBtn.addEventListener('click', function() {

    updateValue('show_quantity');

    // update price;

    const price = document.getElementById('price').innerText;
    const convertPrice = parseInt(price);
    console.log('price', convertPrice)
    const priceSum = convertPrice + 300
    document.getElementById('price').innerText = priceSum;



    // update subtotal price;
    const subTotalPrice = document.getElementById('sub_total_price').innerText
    const convertSubTotalPrice = parseInt(subTotalPrice);
    const currentSubTotalPrice = convertSubTotalPrice + 300
    console.log('convert', convertSubTotalPrice, 'plus ', currentSubTotalPrice)
    document.getElementById('sub_total_price').innerText = currentSubTotalPrice;
})


function updateValue(id) {
    const showQuantity = document.getElementById(id).value;
    const convertNumber = parseInt(showQuantity)
    const currentNumber = convertNumber + 1;
    if (currentNumber == 0) {
        return 1;
    }

    document.getElementById(id).value = currentNumber;


}


// minus button