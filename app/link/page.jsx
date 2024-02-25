import { Avatar, Divider, Link, Tooltip } from "@nextui-org/react";
import { LinkList } from "./components/linkList";
import { GuideList } from "./components/guideList";

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* <h1 className={title()}>믹스계산기</h1> */}
      {/* <h2 className={subtitle({ class: "mt-4" })}>
        믹스레벨을 미리 계산해 볼 수 있습니다.
        <br /> 계산결과는 브라우저에 저장됩니다!
      </h2> */}
      <div className="w-full">
        <div className="space-y-1 flex justify-center flex-col items-start">
          <h4 className="text-medium font-medium">주요링크 및 가이드</h4>
          <p className="text-small text-default-400">
            주요 링크 및 게임 플레이에 도움을 주는 가이드입니다.
          </p>
        </div>
        {/* <TestList list={result} /> */}
        <Divider className="my-4" />
        <h2 className="text-left mx-5">주요링크</h2>
        <Divider className="my-4" />
        {/* 링크 리스트 컴포넌트 */}
        <LinkList />
        <Divider className="my-4 mt-10" />
        <h2 className="text-left mx-5">가이드</h2>
        <Divider className="my-4" />
        {/* 가이드 리스트 컴포넌트 */}
        <GuideList />
      </div>
    </div>
  );
}
