const express = require("express");
const data = require("./data.json");

const app = express();


app.use(express.static('public'), function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
} );

app.get("/api/todos", function (_req, res) {
  res.status(200).send(data);
})

app.listen(3000, function () {
  console.log(`🚄 Server running @ http://localhost:3000`)
});
