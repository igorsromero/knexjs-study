var database = require("./database");

// FUNCTION TO INSERT DATA
function insertData(data) {
    database.insert(data).into("games").then(d => {
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

// FUNCTION TO SELECT ALL DATA
function selectData() {
    database.select(["id", "name", "price"]).table("games").then(d => {
        console.log(d);
    }).catch(err => {
        console.log(err);
    })
}

// FUNCTION TO SELECT DATA AFTER INSERT
function nestedQueries(data) {
    database.insert(data).into("games").then(d => {
        database.select(["id", "name", "price"]).table("games").then(d => {
            console.log(d);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    });
}

// FUNCTION TO SELECT WITH WHERE
function selectDataWhere() {
    database.select()
        .where({ name: "Days Gone" })
        .orWhere({ name: "Cyberpunk 2077" })
        .whereRaw("price > 160")
        .table("games")
        .then(d => {
            console.log(d);
        }).catch(err => {
            console.log(err);
        })
}

/*
// THIS DATABASE.RAW ALLOWS US TO WRITE A SQL COMMAND
database.raw("SELECT * FROM games").then(d => {
    console.log(d);
}).catch(err => {
    console.log(err);
});
*/



// insertData(dados); // INSERT DATA
// selectData(); // SELECT ALL DATA
// nestedQueries(dados); // INSERT AND SELECT ALL DATA
// selectDataWhere(); // SELECT DATA WITH WHERE