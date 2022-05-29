const API_LINK = "http://api.nbp.pl/api/exchangerates/tables/";
const TABLES = ["A", "B"];

function searchForCurrency() {
	for (let i = 0; i < TABLES.length; i++) {
		fetch(API_LINK + TABLES[i], {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				for (let i = 0; i < data[0].rates.length; i++) {
					if (data[0].rates[i].code === "RUB") {
						console.log(data[0].rates[i], "table: " + data[0].table);

						break;
					} else continue;
				}
			});
	}
}

searchForCurrency();
