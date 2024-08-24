require("mongodb");

//Steps
//go to mogodb.com
//create free m0 cluster
//create a user
//get connection string
//install mongodb compass

//how to create our nodejs application to db?
//ans - using npm package mongodb=> npm install mongodb


const { MongoClient } = require("mongodb");
const URI="mongodb+srv://YOURUSERNAME:YOURPASSWORD@namastenode.xfqk0.mongodb.net/";
// Replace the uri string with your connection string.


const client = new MongoClient(URI);

const dbName="testUserDB";

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("users");
    // You can add more operations here if needed

// insert data
const newDoc = { firstName: "Test", lastName: "User", city: "TestCity", country: "TestCountry", phone: "1234567890" };
await collection.insertOne(newDoc);

//read data
const findResult = await collection.find({}).toArray();
console.log("Found documents after insertion:", findResult);

const filteredData=await collection.find({firstName:"Deepak"}).toArray();
console.log(filteredData);

//update



//deleteS






  } catch (err) {
    console.error("An error occurred while connecting to the database:", err);
  } finally {
    try {
      await client.close();
      console.log("Connection closed");
    } catch (err) {
      console.error("An error occurred while closing the connection:", err);
    }
  }
}

run().catch((err) => {
  console.error("An unexpected error occurred:", err);
});