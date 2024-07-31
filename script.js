let droplist = document.querySelectorAll('.dropdown select');
let tocurrency = document.getElementById("to-Currency");
for (let i = 0; i < droplist.length; i++) {
    for (currency_code in currencyCountryMap) {
        let option = document.createElement('option');
        option.value = currency_code;
        option.text = currency_code;
        droplist[i].appendChild(option)
    }
}
document.querySelector('.btnn button').addEventListener("click", () => {

    getcurrencyrate()
})

let api = `https://v6.exchangerate-api.com/v6/d3f50576faaddda0f0c0fe59/latest/${tocurrency.value}`;
function getcurrencyrate() {
    fetch(api).then(response => response.json()).then(result => {
        console.log(result);
        let amount = document.querySelector('.mid input');
        let amountvalue = amount.value;
        if (amountvalue === "" || amountvalue === '0') {
            amount.value = "100";
        }
        let fromcurrency = document.getElementById("from-Currency")
        let exchangerate = result.conversion_rates[fromcurrency.value]
        console.log(exchangerate)
        let totalrate = (amount.value * exchangerate);
        console.log(totalrate)
        document.querySelector('.converted').innerHTML = `${amountvalue} ${tocurrency.value} = ${totalrate} ${fromcurrency.value} `;
    })
}