const API_LINK = "http://api.nbp.pl/api/exchangerates/tables/";
const PROPERLY_STATUS = 200;

const availableCurrencies = [
	"dolar amerykański",
	"euro",
	"jen",
	"kuna chorwacka",
	"funt egipski",
	"rubel białoruski",
	"rubel rosyjski",
];
const TABLES = ["A", "B"];

const submit = document.querySelector(".submit");
const firstCurrencyInput = document.querySelector(".from__currency__input");
const secondCurrencyInput = document.querySelector(".to__currency__input");

submit.addEventListener("submit", (e) => {
	e.preventDefault();

	searchForCurrency()
		.then((data) => {
			for (let i = 0; i < availableCurrencies.length; i++) {}
		})
		.catch((err) => {
			console.log("Error: ", err.message);
		});
});

function exchangeValues() {}

const searchForCurrency = async () => {
	for (let i = 0; i < TABLES.length; i++) {
		const response = await fetch(API_LINK + TABLES[i]);

		if (response.status !== PROPERLY_STATUS)
			throw new Error("The file doesn't exist");

		return await response.json();
	}
};
