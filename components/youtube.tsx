"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import ReactPlayer from "react-player";

const youtubeLink = [
  {
    url: "https://www.youtube.com/embed/KNSi9k5ldYY",
    name: "무너진 밸런스가 캐시 아이템 수요를 만든다.",
    sourceBy: "(영상 출처 : 펭귄몬스터)",
  },
  {
    url: "https://www.youtube.com/embed/7Ucw19UMvFY",
    name: "호주는 100레벨 코어가 귀하다는데.. 제가 대신 먹어보겠습니다~ [믹스마스터, 믹마]",
    sourceBy: "(영상 출처 : 브레스)",
  },
  {
    url: "https://www.youtube.com/embed/IGJtfRRUcX8",
    name: "해외 랭킹 1위 유저는 무슨 혜택이 있을까?｜호주 믹마 랭커 초대석 1부 [믹스마스터]",
    sourceBy: "(영상 출처 : 브레스)",
  },
  {
    url: "https://www.youtube.com/embed/dIUK0BUOMOI",
    name: "믹스마스터 15년 경력, 혹시 이 게임을 기억하시나요..? BJ브레스 장인초대석 [테스터훈]",
    sourceBy: "(영상 출처 : 테스터훈)",
  },
  {
    url: "https://www.youtube.com/embed/PbfKxrJh_2I",
    name: "믹스마스터가 절대 안망하는 이유.",
    sourceBy: "(영상 출처 : 아구 TV)",
  },
];

export const Youtube = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex overflow-scroll pb-10 max-w-7xl gap-4 flex-col items-start sm:flex-row gap-10">
      {mounted &&
        youtubeLink.map((elem, idx) => {
          return (
            // width: 80vw;position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%);
            // <div className="relative top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-80vw">
            <div
              // className="sm:h-0 pb-[56.25%] relative w-full"
              key={idx}
            >
              <ReactPlayer
                url={elem.url}
                // className="pb-1"
                // width={500}
                // height={281}
                playing={false}
                muted={false}
                width={360}
                height={200}
                // style={{ position: "absolute", top: 0, left: 0 }}
              />
              {/* <div className={styles.youtube_desc}> */}
              <a className="text-sm	font-bold">{elem.name}</a>
              <a className="text-xs font-light ml-2">{elem.sourceBy}</a>
            </div>
            // </div>
            // </div>
          );
        })}
    </div>
  );
};
