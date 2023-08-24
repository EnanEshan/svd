require("dotenv/config");
const BOT = require("./Structures/bot");
const client = new BOT();

client.init();
//this.client.settings = new enmap({ name: `Cruxop`})
//Moved to /Structures/bot.js