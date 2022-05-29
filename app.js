const API_LINK = "http://api.nbp.pl/api/exchangerates/tables/";
const PROPERLY_STATUS = 200;
const TABLES = ["A", "B"];

const searchForCurrency = async () => {
	for (let i = 0; i < TABLES.length; i++) {
		const response = await fetch(API_LINK + TABLES[i]);

		if (response.status !== PROPERLY_STATUS)
			throw new Error("The file doesn't exist");

		return await response.json();
	}
};

searchForCurrency()
	.then((data) => {
		for (let i = 0; i < data[0].rates.length; i++) {
			if (data[0].rates[i].code === "USD") {
				console.log(data[0].rates[i], "table: " + data[0].table);

				break;
			} else continue;
		}
	})
	.catch((err) => {
		console.log("Error: ", err.message);
	});
