
const connections = require("../Config/database")

const getHomepage = (req, res) => {
    let movie = [];
    connections.query(
        'SELECT * FROM film',
        (error, results, fields) => {
            movie = results;
            console.log(movie);
            res.send(JSON.stringify(movie));// gửi về kiểu String
        });
    
}
const getUser = (req, res) => {
    let movie = [];
    connections.query(
        'SELECT id FROM film',
        (error, results, fields) => {
            movie = results;
            console.log(movie);
            res.send(JSON.stringify(movie));// gửi về kiểu String
        });
}


module.exports = {
    getHomepage,
    getUser
}
