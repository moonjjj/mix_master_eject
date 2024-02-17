"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Youtube } from "@/components/youtube";
import { motion, useScroll } from "framer-motion";

// import { useEffect, useRef, useState } from "react";
// import { useClient } from "next/data-client";
export default function Home() {
  //   useClient();
  // const scrollXRef = useRef(null);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>안녕하세요&nbsp;</h1>
        <h1 className={title({ color: "yellow" })}>호주믹스마스터&nbsp;</h1>
        <br />
        <h1 className={title()}>공략사이트입니다.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          더 많은 정보를 주기위해
          <br />
          노력하겠습니다.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.download}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          <img src="../mix_logo.png" width={20} />
          게임 다운로드
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            color: "primary",
            radius: "full",
          })}
          href={siteConfig.links.cafe}
        >
          <img src="../naver_logo.png" width={20} />
          호믹 카페
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            <Code color="danger">좌측 상단</Code>의 네비게이션으로 이동해보세요
          </span>
        </Snippet>
      </div>

      {/* test */}
      <div>
        <span>
          관련영상
          <svg
            // id={styles.progress}
            width="45"
            height="45"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              //   className={styles.circle}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              className="stroke-dashoffset-0 stroke-width-15 fill-none stroke-red opacity-30"
              pathLength="1"
              // style={{ pathLength: scrollXProgress }}
            />
          </svg>
        </span>
        <Youtube />
        <span>더블클릭하여 전체화면으로 감상할 수 있습니다.</span>
        <div>
          <a href="https://developers.google.com/youtube/player_parameters?hl=ko">
            유튜브 플레이어 삽입 관련 조항
          </a>
          <a href="https://support.google.com/youtube/thread/185330430/%EC%9D%B8%EC%95%B1-embeddable-player-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EC%A0%80%EC%9E%91%EA%B6%8C-%EB%B0%8F-%EA%B8%B0%EB%8A%A5-%EA%B4%80%EB%A0%A8-%EB%AC%B8%EC%9D%98?hl=ko">
            유튜브 플레이어 삽입 관련 조항2
          </a>
          <span>문의 : 좌측하단 이메일 참고</span>
        </div>
      </div>
    </section>
  );
}
