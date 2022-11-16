const { MongoClient } = require("mongodb");

function MyMongoDB() {
  const myDB = {};
  const url = process.env.DB_URL || "mongodb://localhost:27017";
  const DB_NAME = "food";

  myDB.read = async (collectionName, query) => {
    let client;

    try {
      client = new MongoClient(url, { useUnifiedTopology: true });
      console.log("Connecting to the db");
      await client.connect();
      console.log("Connected!");
      const db = client.db(DB_NAME);
      const collection = db.collection(collectionName);
      let res = await collection.find(query).toArray();
      console.log("read dishes", res);
      return res;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  //Akhila Sulgante
  myDB.auth = async (collectionName, data) => {
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(DB_NAME);
    let usersCol = db.collection(collectionName);
    console.log(data.email);
    try {
      let res = await usersCol.findOne({ email: data.email });
      console.log("password", res.password, "data ", data.password);
      if (res?.password === data.password) {
        console.log("authenticated");
        return true;
      }
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
    return false;
  };

  myDB.insertuser = async (collectionName, data) => {
    const connection = new MongoClient(url);
    await connection.connect();
    const db = connection.db(DB_NAME);
    const colname = db.collection(collectionName);
    try {
      console.log(data);
      let res = await colname.insertOne({
        FirstName: data.fname,
        LastName: data.lname,
        email: data.email,
        password: data.password,
      });
      return true;
    } catch (e) {
      console.log(e);
    } finally {
      await connection.close();
    }
    return false;
  };
  return myDB;
}

module.exports = MyMongoDB();
