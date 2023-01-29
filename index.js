const mongoose = require("mongoose");
const express = require("express");
const Cards = require("./dbcards");



const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://PUNEETH:Puneeth076@cluster0.klwlxme.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});



app.get("/", (req, res) => {
  res.status(200).send("Hello welcome to world of backend");
});

app.post("/tinder/card", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
    mongoose.connection.close()
  });
});

app.get("/tinder/card", (req, res) => {
 Cards.find((err,data) => {
    if(err){
        res.status(500).send(err);
    }
    else{
        res.status(200).send(data);
    }
 })
});

app.listen(port, () => console.log(`listening on ${port}`));
