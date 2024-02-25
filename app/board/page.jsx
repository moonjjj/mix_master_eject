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

const list = {
  forStarter: [
    {
      icon: "공략",
      title: "돈 버는 팁입니다",
      time: "2022-12-20",
      url: "",
    },
    {
      icon: "정보",
      title: "정보 공유합니다!",
      time: "2022-12-20",
      url: "",
    },
    {
      icon: "자유",
      title: "자유롭게 아무거나 써볼까요",
      time: "2020-02-02",
      url: "https://discord.com/",
    },
    {
      icon: "기타",
      title: "아무 내용이나 좋아요 ~ !",
      subTitle: "2020-02-02",
      url: "",
    },
  ],
};
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
              모든 게시물은 네이버 호믹 공식카페와 연결됩니다.
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
              <WriteButton />
              <HowToWriteButton />
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
              <Radio value="2">공략</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="3">정보</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="4">자유</Radio>
              <Divider orientation="vertical" className="mx-1" />
              <Radio value="5">기타</Radio>
            </RadioGroup>
            <Switchs />
          </div>
          <Divider className="my-4" />

          <div>
            {list.forStarter.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="cursor-pointer flex items-center py-3 px-1 pr-10 transition-all rounded-md border-b-1 border-slate-800		 hover:bg-[#3f3f46]"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <Avatar
                        showFallback
                        name={elem.icon}
                        size="lg"
                        className="text-sm"
                      />
                      <div className="flex gap-3 items-end">
                        <span className="text-2xl font-medium">
                          {elem.title}
                        </span>
                        <span className="text-sm text-slate-500	">
                          {elem.time}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button color="primary">바로가기</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
