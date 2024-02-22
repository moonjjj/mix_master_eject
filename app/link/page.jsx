import { Divider } from "@nextui-org/react";

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
          <h4 className="text-medium font-medium">주요링크</h4>
          <p className="text-small text-default-400">
            외부 관련 자료 및 링크들 입니다.
          </p>
        </div>
        {/* <TestList list={result} /> */}
        <Divider className="my-4" />
      </div>
    </div>
  );
}
