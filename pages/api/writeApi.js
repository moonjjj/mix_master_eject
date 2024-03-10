import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("mixmaster");
  let result = await db.collection("forum").insertOne(req.body);
  res.status(200).json(result);
}

// const writeApi = async () => {
//   const client = await connectDB;
//   const db = client.db("mixmaster");
//   let result = await db.collection("forum").insertOne(writeValue);
//   // return res.status(200).redirect("/board");
//   console.log(result);
// };
