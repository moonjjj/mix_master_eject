"use client";

import { SearchIcon } from "@/components/icons";
import {
  Button,
  Divider,
  Input,
  RadioGroup,
  Radio,
  Avatar,
  Link,
} from "@nextui-org/react";
import Switchs from "@/components/switch";
import { WriteButton } from "@/components/button/writeButton";
import { HowToWriteButton } from "@/components/button/howToWriteButton";
import { useState } from "react";

export const BoardList = ({ lists }) => {
  const [list, setList] = useState(lists);

  //   필터링 하는 함수
  const filterHandle = (e) => {
    // 이벤트로부터 받은 값
    const value = e.target.value;

    // 필터링된 목록을 저장할 변수
    let filteredList = [];

    // "전체보기" 선택 시 모든 목록을 보여줌
    if (value === "전체보기") {
      setList(lists);
    } else {
      // 필터링된 목록을 설정
      filteredList = lists.filter((item) => item.icon === value);
      setList(filteredList);
    }

    // 로그 출력
    console.log("선택한 값:", value);
    console.log("필터링된 목록:", filteredList);
  };

  //검색하는 함수
  const searchHandle = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    // 필터링된 목록을 저장할 변수
    let filteredList = [];

    filteredList = lists.filter(
      (item) => item.title.includes(value) || item.icon.includes(value)
    );
    setList(filteredList);
  };

  return (
    <>
      <div className="flex items-center space-x-4 text-small justify-between	">
        <div className="w-[400]px">
          {/* <Input
            label="검색"
            // isClearable
            radius="lg"
            onChange={searchHandle}
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
          /> */}
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
          defaultValue="전체보기"
          orientation="horizontal"
          onChange={filterHandle}
        >
          <Radio value="전체보기">전체보기</Radio>
          <Divider orientation="vertical" className="mx-1" />
          <Radio value="공략">공략</Radio>
          <Divider orientation="vertical" className="mx-1" />
          <Radio value="정보">정보</Radio>
          <Divider orientation="vertical" className="mx-1" />
          <Radio value="자유">자유</Radio>
          <Divider orientation="vertical" className="mx-1" />
          <Radio value="기타">기타</Radio>
        </RadioGroup>
        {/* <Switchs /> */}
      </div>
      <Divider className="my-4" />
      <div>
        {list.length !== 0 ? (
          list.map((elem, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex items-center py-3 px-1 pr-10 transition-all rounded-md border-b-1 border-slate-800 hover:bg-[#3f3f46]"
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
                    <span className="text-2xl font-medium">{elem.title}</span>
                    <span className="text-sm text-slate-500">{elem.date}</span>
                  </div>
                </div>
                <div>
                  <Button color="primary" isExternal as={Link} href={elem.url}>
                    바로가기
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="font-bold">검색된 결과가 없습니다.</div>
        )}
      </div>
    </>
  );
};
