var express = require("Express");
const connect = require("./config/index");
var app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
//cứ khi có file json đến thì nó mới phân tách,nhận được
app.use(express.json());
//callback function có 2 tham số là request và respon
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const router = require("./router");

connect.connect();

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
