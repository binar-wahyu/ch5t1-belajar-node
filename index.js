const os = require("os");
const luasSegitiga = require("./segitiga");
const rumus = require("./rumus");

console.log("Free memory:", os.freemem());

console.log(luasSegitiga(3, 4));

console.log(rumus.luasSegitiga(3, 4));
rumus.luasPersegi();
rumus.luasPersegiPanjang();
