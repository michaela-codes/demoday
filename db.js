const MongoClient = require('mongodb').MongoClient;

class Database {
  constructor() {
    this.client = null;
    this.config = null;
  }

  configure = async (config) => {
    this.config = config;
    console.log("Configuring Mongo Connection");

    const url = `mongodb://${config.url}:${config.port}`;
    this.client = new MongoClient(url, config.options);

    await this.client.connect();
    console.log(`Mongo connection to ${config.url} is successful!`);

    return this.client;
  };

  getDb = () => {
    return this.client.db(this.config.database);
  };

  disconnect = async () => {
    return this.client.close();
  };
}

module.exports = new Database();