var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var mil = require("./coins/mil.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"MIL": mil,

	"coins":["BTC", "LTC", "MIL"]
};