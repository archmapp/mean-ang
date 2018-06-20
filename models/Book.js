var mongoose = require('mongoose');


var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
  });

  // curl -i -X POST -H \"Content-Type: application/json\"
  //  -d "{ \"isbn\":\"123442123, 97885654453443\",\"title\":\"Learn how to build modern web application with MEAN stack\",\"author\": \"Didin J.\",\"description\":\"The comprehensive step by step tutorial on how to build MEAN (MongoDB, Express.js, Angular 5 and Node.js) stack web application from scratch\",\"published_year\":\"2017\",\"publisher\":\"Djamware.com\" }"
  //  localhost:3000/book
  // 参  ファイル: jsondata.txt 
  // 参  curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d @jsondata.txt  http://localhost:3000/api/1/users
  module.exports = mongoose.model('Book', BookSchema);