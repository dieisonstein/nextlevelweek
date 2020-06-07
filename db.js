// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

  
// criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

   db.serialize(() => {

// //     // com comandos SQL eu vou:

// //     // criar um tabela
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// //     `)

// //       // Inserir dados na tabela

// // // Consultar os dados da tabela
// // //  db.all(`SELECT * FROM places`, function(err, rows) {
// // //    if(err) {
// // //       return console.log(err)
// // //     }
// // // 
// // //       console.log("Aqui estão os seus registros: ")
// // //      console.log(rows)
// // //})



// // Deletar um dado da tabela
// // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
// //     if(err) {
// //        return console.log(err)
// //    }

// //      console.log("Registro deletado com sucesso!")
// // })


 })