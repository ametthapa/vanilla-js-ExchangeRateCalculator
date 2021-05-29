const currecyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');

const currecyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');

const swap = document.getElementById('swap');


function calculate(){
    const currency_one = currecyEl_one.value;
    const currency_two = currecyEl_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/bcc4fad7ead98d17dd53e479/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const rate = data.conversion_rates[currency_two];
            // rateEL.innerText="okay";
            rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(3);
            
        });
}

//Event Listeners
currecyEl_one.addEventListener('change',calculate);
currecyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click', () =>{
    const temp = currecyEl_one.value;
    currecyEl_one.value = currecyEl_two.value;
    currecyEl_two.value = temp;
    calculate();
});

calculate();