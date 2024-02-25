import { Avatar, Divider, Link, Tooltip } from "@nextui-org/react";

const list = {
  forStarter: [
    {
      icon: "💬",
      title: "호믹 단톡방",
      subTitle: "한인 단톡방으로 여러 정보들을 공유합니다.",
      url: "",
    },
    {
      icon: "🌱",
      title: "호믹 공식카페",
      subTitle:
        "호믹 공식 카페입니다. 공략 및 거래가 가장 활발한 사이트입니다.",
      url: "",
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
      url: "",
    },
  ],
};

export const GuideList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 flex-wrap flex-col mx-7 my-5 w-full">
        <p className="text-left font-sans text-sm mx-2 mb-3">시작</p>
        {list.forStarter.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="cursor-pointer flex gap-3 items-center py-2 px-1 pr-10 transition-all rounded-md	 hover:bg-[#3f3f46]"
            >
              <Avatar
                showFallback
                name={elem.icon}
                size="lg"
                className="text-2xl"
              />
              <div className="flex gap-3 items-end">
                <span className="text-2xl font-medium">{elem.title}</span>
                <span className="text-sm text-slate-500	">{elem.subTitle}</span>
              </div>
            </div>
          );
        })}
        <Divider />
      </div>
    </div>
  );
};
