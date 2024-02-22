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
} from "@nextui-org/react";
import Switchs from "@/components/switch";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default async function BoardPage() {
  // 리절트
  // const client = await connectDB;
  // const db = client.db("mixmaster");
  // let result = await db.collection("post").find().toArray();
  // console.log(result);
  // 클라이언트 컴포넌트에서 react 훅을 불러주고
  // 서버 컴포넌트에서 호출한 값을 넘겨주는 방식?

  return (
    <div>
      <div className="w-full">
        {/* <h1 className={title()}>믹스계산기</h1> */}
        {/* <h2 className={subtitle({ class: "mt-4" })}>
        믹스레벨을 미리 계산해 볼 수 있습니다.
        <br /> 계산결과는 브라우저에 저장됩니다!
      </h2> */}
        <div className="w-full">
          <div className="space-y-1 flex justify-center flex-col items-start">
            <h4 className="text-medium font-medium">게시판</h4>
            <p className="text-small text-default-400">
              모든 게시물은 네이버카페와 연결됩니다.
            </p>
          </div>
          {/* <TestList list={result} /> */}
          <Divider className="my-4" />
          <div className="flex items-center space-x-4 text-small justify-between	">
            <div className="w-[400]px">
              <Input
                label="검색"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="검색어를 입력해주세요."
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="flex gap-4">
              <Button className="cursor-pointer" color="primary">
                글쓰기
              </Button>
              <Button className="cursor-pointer">글쓰는 방법</Button>
            </div>
          </div>
          <div className="my-4 flex items-center space-x-4 text-small justify-between">
            <RadioGroup
              // label="원하는 카테고리를 선택해주세요."
              color="secondary"
              defaultValue="1"
              orientation="horizontal"
            >
              <Radio value="1">전체보기</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="2">💲 돈버는 팁</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="3">📈 육성 팁</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="4">💬 자유대화</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="5">🎸 기타</Radio>
            </RadioGroup>
            <Switchs />
          </div>
          <Divider className="my-4" />

          <div></div>
        </div>
      </div>
    </div>
  );
}
