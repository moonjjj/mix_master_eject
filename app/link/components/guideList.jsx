import { Avatar, Divider, Link, Tooltip, Code } from "@nextui-org/react";

const list = {
  forStarter: [
    {
      icon: "💬",
      title: "호믹 단톡방",
      subTitle: "한인 단톡방으로 여러 정보들을 공유합니다.",
      url: "https://open.kakao.com/o/gsUsiy2c",
    },
    {
      icon: "🟩",
      title: "호믹 공식카페",
      subTitle:
        "호믹 공식 카페입니다. 공략 및 거래가 가장 활발한 사이트입니다.",
      url: "https://cafe.naver.com/mixmasterau",
    },
    {
      icon: "🔥",
      title: "브레스 신규 호믹카페",
      subTitle: "BJ 브레스님이 운영하는 네이버 카페입니다.",
      url: "https://cafe.naver.com/blade",
    },
    {
      icon: "👾",
      title: "호믹 디스코드",
      subTitle:
        "호믹에서 운영하는 디스코드입니다. 외인들과도 거래할 수 있습니다. (디스코드 내 [Mixmaster Online] 검색 후 가입)",
      url: "https://discord.com/",
    },
    {
      icon: "😰",
      title: "게임 실행이 안 될 때",
      subTitle: "자주 묻는 질문 중 하나로, 게임실행이 안 될 때 대처법입니다.",
      url: "https://cafe.naver.com/mixmasterau/3160",
    },
  ],
  forGrow: [
    {
      icon: "🌱",
      title: "공략 - 초반 육성",
      subTitle: "호주믹마 처음 시작할 때 읽기 좋은 글 ( 출처 : MC님 )",
      url: "https://cafe.naver.com/mixmasterau/1833",
    },
    {
      icon: "💪",
      title: "공략 - 무자본 육성",
      subTitle:
        "호주믹마 무자본 공략 1 ~ 141 상세하게 ! ( 출처 : fokerface님 )",
      url: "https://cafe.naver.com/mixmasterau/8502",
    },
    {
      icon: "🎱",
      title: "공략 - 전레벨 육성",
      subTitle: "렙업루트 1부터 200까지 ! ( 출처 : Turtly님 )",
      url: "https://cafe.naver.com/mixmasterau/4419",
    },
  ],
  forUserTip: [
    {
      icon: "💎",
      title: "아이템 만드는 방법",
      subTitle: "장비 제작시 필요 아이템 정리 ( 출처 : Tenacity )",
      url: "https://cafe.naver.com/mixmasterau/1770",
    },
    {
      icon: "📄",
      title: "시세 정리표",
      subTitle:
        "시세는 매우 유동적이니, 대략적인 시세 참고 ( 출처 : fokerface님 )",
      url: "https://cafe.naver.com/mixmasterau/409",
    },
  ],
};

export const GuideList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 flex-wrap flex-col mx-0 my-5 w-full lg:mx-7">
        <p className="text-left font-sans text-sm mx-2 mb-3">시작</p>
        {list.forStarter.map((elem, idx) => {
          return (
            <Link
              isBlock
              isExternal
              showAnchorIcon
              className="cursor-pointer flex gap-3 items-center py-2 px-1 pr-10 transition-all rounded-md	 hover:bg-[#3f3f46]"
              href={elem.url}
              color="foreground"
            >
              <Avatar
                showFallback
                name={elem.icon}
                size="lg"
                className="text-2xl"
              />
              <div className="flex gap-3 items-end">
                <span className="text-2xl font-medium">{elem.title}</span>
                <span className="hidden lg:block text-sm text-slate-500	">
                  {elem.subTitle}
                </span>
              </div>
            </Link>
          );
        })}
        <Divider />
        <p className="text-left font-sans text-sm mx-2 mb-3">육성</p>
        {list.forGrow.map((elem, idx) => {
          return (
            <Link
              isBlock
              isExternal
              showAnchorIcon
              className="cursor-pointer flex gap-3 items-center py-2 px-1 pr-10 transition-all rounded-md	 hover:bg-[#3f3f46]"
              href={elem.url}
              color="foreground"
            >
              <Avatar
                showFallback
                name={elem.icon}
                size="lg"
                className="text-2xl"
              />
              <div className="flex gap-3 items-end">
                <span className="text-2xl font-medium">{elem.title}</span>
                <span className="hidden lg:block text-sm text-slate-500	">
                  {elem.subTitle}
                </span>
              </div>
            </Link>
          );
        })}
        <Divider />
        <p className="text-left font-sans text-sm mx-2 mb-3">정보</p>
        {list.forUserTip.map((elem, idx) => {
          return (
            <Link
              isBlock
              isExternal
              showAnchorIcon
              className="cursor-pointer flex gap-3 items-center py-2 px-1 pr-10 transition-all rounded-md	 hover:bg-[#3f3f46]"
              href={elem.url}
              color="foreground"
            >
              <Avatar
                showFallback
                name={elem.icon}
                size="lg"
                className="text-2xl"
              />
              <div className="flex gap-3 items-end">
                <span className="text-2xl font-medium">{elem.title}</span>
                <span className="hidden lg:block text-sm text-slate-500	">
                  {elem.subTitle}
                </span>
              </div>
            </Link>
          );
        })}
        <Divider />
        <div className="mx-5 mt-10 flex items-start flex-col  w-full overflow-scroll">
          <Code size="lg" className="mb-5 font-bold">
            시작해보고 싶은데 어떻게 시작해야 되나요?
          </Code>

          <div className="flex flex-col gap-2 items-start text-small">
            <Code size="md">제일 많이 받았던 질문이였습니다.</Code>
            <Code size="md">
              포털사이트에 호주믹스마스터를 검색해도 정보가 나오지 않고,
            </Code>
            <Code size="md">
              공식 홈페이지 들어가는 페이지 조차도 보이지 않았습니다.
            </Code>
            <br />
            <Code size="md">다소 진입장벽이 높은 게임이라 생각이 되어</Code>
            <Code size="md">
              플레이에 도움을 드리고 싶어 만든 웹사이트입니다.
            </Code>
            <br />
            <Code size="md">
              호주믹스마스터는 예전 믹스마스터의 느낌이 있고, 템을 제작하는
              재미가 있고,
            </Code>
            <Code size="md">PVP 하는 재미가 있는 게임이라고 생각합니다.</Code>
            <Code size="md">
              {" "}
              예전 향수를 잠시 느낀다고 생각하며 가볍게 시작하시는 것을
              추천드립니다!
            </Code>
            <br />
            <Code size="md">아직 부족한 웹사이트 봐주셔서 감사하고,</Code>
            <Code size="md">
              고안하여 점점 좋은 사이트 만들어보겠습니다 🙇‍♂️ <br />
              <Code size="sm">
                피드백 환영 ( 우측하단 채널톡 이용해주세요! 👋 )
              </Code>
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
};
