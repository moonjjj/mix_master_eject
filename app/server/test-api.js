import { connectToDatabase } from "../../util/database";

export default async function handler(req, res) {
  console.log("------1");
  try {
    const db = await connectToDatabase();

    // const collection = db.collection('post');
    let result = await db.collection("post").find().toArray();
    console.log("server");
    return res.status(200).json({ data: result }); // JSON 형식으로 데이터 반환
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ error: "Internal server error" }); // 에러 응답 반환
  }
}
