//plus button event
const plusBtn = document.getElementById('plus_btn');

plusBtn.addEventListener('click', function() {
    updateValue('show_quantity')
})



function updateValue(id) {
    const showQuantity = document.getElementById(id).value;
    const convertNumber = parseInt(showQuantity)
    const currentValue = convertNumber + (-1 * 1);
    document.getElementById(id).value = currentValue;
}

// clickBtn(plusBtn)