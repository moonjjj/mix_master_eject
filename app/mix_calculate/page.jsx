import {
  Chip,
  Divider,
  Link,
  Input,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Calculator } from "@/components/calculator";
// import {NotificationIcon} from "./NotificationIcon";
// import {CheckIcon} from "./CheckIcon";
// import { AcmeLogo } from "./AcmeLogo.jsx";

const mixLink = [
  {
    title: "믹스계산기 (호주 공홈)",
    desc: "믹스레벨을 미리 계산해 볼 수 있습니다.",
    url: "https://mixtree.cc/",
    color: "",
    divider: false,
  },
  {
    title: "믹스공식 (호주 공홈)",
    desc: "믹스공식 표를 제공합니다. ",
    url: "https://global.playmixmaster.com/database/?module=data",
    color: "",
    divider: false,
  },
  {
    title: "믹스트리",
    desc: "믹스 족보기능을 제공합니다. (출처 : 외인)",
    url: "https://mixtree.cc/",
    color: "",
    divider: true,
  },
  {
    title: "믹스레벨 산출관련 자료",
    desc: "믹스레벨 연구에 대한 고찰입니다. (출처 : 이벤군)",
    url: "https://m.blog.naver.com/even1415/222538241160",
    color: "",
    divider: true,
  },
];

export default function DocsPage() {
  return (
    <div className="w-full">
      {/* <h1 className={title()}>믹스계산기</h1> */}
      {/* <h2 className={subtitle({ class: "mt-4" })}>
        믹스레벨을 미리 계산해 볼 수 있습니다.
        <br /> 계산결과는 브라우저에 저장됩니다!
      </h2> */}
      <div className="w-full">
        <div className="space-y-1 flex justify-center flex-col items-start">
          <h4 className="text-medium font-medium">믹스계산기</h4>
          <p className="text-small text-default-400">
            믹스레벨을 미리 계산해 볼 수 있습니다. 계산결과는 브라우저에
            저장됩니다!
          </p>
        </div>
        <Divider className="my-4" />
        <div className="flex items-center space-x-4 text-small">
          <div className="w-1/2">
            <Calculator />
          </div>
          <Divider orientation="vertical" />
          <div className="w-1/2 h-[672px]">
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-small text-default-600 ml-1 text-left">
                관련링크
              </p>
              {mixLink.map((elem, idx) => {
                return (
                  <>
                    <Link
                      isBlock
                      showAnchorIcon
                      href={elem.url}
                      color="foreground"
                      isExternal
                    >
                      <h4 className="text-medium font-medium">{elem.title}</h4>
                      <p className="text-small text-default-400 mx-3">
                        {elem.desc}
                      </p>
                    </Link>
                    {elem.divider && <Divider orientation="vertical" />}
                  </>
                );
              })}

              {/* <Link isBlock showAnchorIcon href="#" color="success"></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
