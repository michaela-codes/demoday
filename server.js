const express = require('express');
const bodyParser = require('body-parser');
const demoRouter = require('./router/demoDay.router');
const db = require('./db');
const port = 4000;

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/demoday', demoRouter)


const dbConfig = {
  url: "127.0.0.1",
  port: 27017,
  database: "demoday",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  },
};

db.configure(dbConfig);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})