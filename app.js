const API_LINK = "https://api.nbp.pl/api/exchangerates/tables/";
const PROPERLY_STATUS = 200;

const availableCurrencies = [
	"dolar amerykański",
	"euro",
	"funt egipski",
	"jen",
	"kuna chorwacka",
	"rubel białoruski",
	"rubel rosyjski",
];
const TABLES = ["A", "B"];

const submit = document.querySelector(".submit");
const selectForCurrencies = document.querySelector(".select__for__currencies");
const firstCurrencyInput = document.querySelector(".from__currency__input");
const secondCurrencyInput = document.querySelector(".to__currency__input");

let currentCurrency;

submit.addEventListener("click", (e) => {
	exchangeValues();
});

function exchangeValues() {
	searchForCurrency()
		.then((currency) => {
			let convertedValue = firstCurrencyInput.value / currency.mid;
			let desiredValue = convertedValue.toFixed(2);
			secondCurrencyInput.value = desiredValue;
		})
		.catch((err) => {
			console.log("Error: ", err.message);
		});
}
//

const searchForCurrency = async () => {
	for (let i = 0; i < TABLES.length; i++) {
		const response = await fetch(API_LINK + TABLES[i]);

		if (response.status !== PROPERLY_STATUS)
			throw new Error("The file doesn't exist");

		const data = await response.json();
		console.log(data[0]);

		for (let i = 0; i < data[0].rates.length; i++) {
			if (selectForCurrencies.value == data[0].rates[i].currency) {
				currentCurrency = data[0].rates[i];

				return currentCurrency;
			}
		}
	}
};
