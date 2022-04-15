const fs = require("fs");

const isi = fs.readFileSync("./text.txt", "utf-8");

console.log(isi);

fs.writeFileSync("./baru.txt", "Binar mantap!!!");
