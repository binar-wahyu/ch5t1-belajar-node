const fs = require("fs");

// 1
function createPerson(data) {
  fs.writeFileSync("./person.json", JSON.stringify(data));
}

createPerson({
  nama: "Wahyu Budi",
  alamat: "Bali",
  tempat: "Binar",
});

// 2
fs.writeFileSync(
  "./person.json",
  JSON.stringify({
    nama: "Wahyu Budi",
    alamat: "Bali",
    tempat: "Binar",
  })
);
