const API_LINK =
	"https://api.fastforex.io/fetch-all?from=PLN&api_key=3147b156d7-7a47dbe4e2-rcra4w";
const PROPERLY_STATUS = 200;

const submit = document.querySelector(".submit");
const selectForCurrencies = document.querySelector(".select__for__currencies");
const firstCurrencyInput = document.querySelector(".from__currency__input");
const secondCurrencyInput = document.querySelector(".to__currency__input");

let currentCurrency;

submit.addEventListener("click", (e) => {
	exchangeValues();
});

function exchangeValues() {
	getCurrencies()
		.then((currency) => {
			let exchangeValue = firstCurrencyInput.value * currency;
			let desiredValue = exchangeValue.toFixed(2);
			secondCurrencyInput.value = desiredValue;
		})
		.catch((err) => {
			console.log("ERROR: ", err.message);
		});
}

const getCurrencies = async () => {
	const response = await fetch(API_LINK, {
		method: "GET",
	});

	if (response.status !== 200) throw new Error("Couldn't fetch the data");

	const data = await response.json();
	const results = Object.keys(data.results);

	for (let i = 0; i < results.length; i++) {
		if (results[i] === selectForCurrencies.value) {
			currentCurrency = results[i];

			switch (currentCurrency) {
				case "USD":
					currentCurrency = data.results.USD;
					break;
				case "EUR":
					currentCurrency = data.results.EUR;
					break;
				case "EGP":
					currentCurrency = data.results.EGP;
					break;
				case "HRK":
					currentCurrency = data.results.HRK;
					break;
				case "RUB":
					currentCurrency = data.results.RUB;
					break;
				case "JPY":
					currentCurrency = data.results.JPY;
					break;
			}

			return currentCurrency;
		}
	}
};
