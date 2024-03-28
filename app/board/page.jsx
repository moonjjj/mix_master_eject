import { title } from "@/components/primitives";
import { connectDB } from "@/util/database";
import { TestList } from "@/components/testlist";
import { SearchIcon } from "@/components/icons";
import {
  Button,
  Chip,
  Divider,
  Input,
  RadioGroup,
  Radio,
  Table,
  TableHeader,
  Avatar,
} from "@nextui-org/react";
import Switchs from "@/components/switch";
import { WriteButton } from "@/components/button/writeButton";
import { HowToWriteButton } from "@/components/button/howToWriteButton";
import { BoardList } from "./components/boardList";

export default async function BoardPage() {
  // 리절트
  const client = await connectDB;
  const db = client.db("mixmaster");
  let list = await db.collection("forum").find().toArray();
  let result = list.reverse();

  return (
    <div>
      <div className="w-full">
        <div className="w-full">
          <div className="space-y-1 flex justify-center flex-col items-start">
            <h4 className="text-medium font-medium">게시판</h4>
            <p className="text-small text-default-400">
              모든 게시물은 네이버 호믹 공식카페 / 호믹 유저카페와 연결됩니다.
            </p>
          </div>
          <Divider className="my-4" />
          <BoardList lists={result} />
        </div>
      </div>
    </div>
  );
}
