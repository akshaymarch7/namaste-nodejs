const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://namastedev:ECXK5j0d4OuHZhs6@namastenode.rc211ms.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Ranveer",
    lastname: "Singh",
    city: "Mumbai",
    phoneNumber: "987543210",
  };

  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult);

  // Find all documents with a filter of firstname: Deepika

  const result = await collection.find({ firstname: "Deepika" }).count();
  console.log("result => ", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete
