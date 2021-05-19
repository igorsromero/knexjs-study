var database = require("./database");

// FUNCTION TO INSERT DATA
function insertData(data){
    var query = database.insert(data).into("games").then(d => {
        console.log(d);
    }).catch(err => {
        console.log(err);
    })
}

var dados = [
    {
        name: "Days Gone",
        price: 199.90
    },
    {
        name: "Resident Evil Village",
        price: 179.99
    },
    {
        name: "Cyberpunk 2077",
        price: 159.92
    }
]

insertData(dados); // INSERT DATA
