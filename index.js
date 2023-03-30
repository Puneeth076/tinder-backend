const mongoose = require("mongoose");
const express = require("express");
const Cards = require("./dbcards");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://Puneeth:BygGxvXCvYiXUDeB@cluster0.agasheg.mongodb.net/?retryWrites=true&w=majority";

try{
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
  console.log("Mongose connected");
}catch(error){
console.log(error);
}

mongoose.set("strictQuery", true);

try{

app.get("/", (req, res) => {
  res.status(200).send("Hello welcome to world of backend");
});

app.post("/tinder/card", (req, res) => {
  const dbcards = req.body;
  Cards.create(dbcards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
}
catch(error){
console.log(error);
}

app.listen(port, () => console.log(`listening on ${port}`));
