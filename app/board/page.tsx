import { title } from "@/components/primitives";
import { connectDB } from "@/util/database";
import { TestList } from "@/components/testlist";

export default async function BoardPage() {
  // 리절트
  const client = await connectDB;
  const db = client.db("mixmaster");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  // 클라이언트 컴포넌트에서 react 훅을 불러주고
  // 서버 컴포넌트에서 호출한 값을 넘겨주는 방식?

  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <TestList list={result} />
    </div>
  );
}
