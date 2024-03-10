import { Divider, Link, Tooltip } from "@nextui-org/react";

export const LinkList = () => {
  return (
    <div className="flex">
      <div className="flex gap-2 flex-wrap mx-7 my-5">
        <div className="flex gap-3 mb-6">
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com"
            color="primary"
          >
            호주 믹스마스터 공식홈페이지
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com/mixmall"
            color="foreground"
          >
            상점
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com/database/monsterlist-table"
            color="foreground"
          >
            믹스공식
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com/articles?category=2"
            color="foreground"
          >
            이벤트
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com/download"
            color="foreground"
          >
            다운로드
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://global.playmixmaster.com/signup"
            color="foreground"
          >
            회원가입
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://cafe.naver.com/mixmasterau"
            color="foreground"
          >
            호믹 카페
          </Link>
          <Divider orientation="vertical" />
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://cafe.naver.com/blade"
            color="foreground"
          >
            브레스님 호믹 카페
          </Link>
          <Divider orientation="vertical" />
          <Tooltip content="본믹카페에도 해외믹마 정보가 있어요 !">
            <Link
              isBlock
              isExternal
              showAnchorIcon
              href="https://cafe.naver.com/mixforum"
              color="foreground"
            >
              본믹 카페
            </Link>
          </Tooltip>
          <Divider orientation="vertical" />
          <Tooltip content="족보 참고하기 좋은 사이트입니다.">
            <Link
              isBlock
              isExternal
              showAnchorIcon
              href="https://mixtree.cc/"
              color="foreground"
            >
              믹스트리
            </Link>
          </Tooltip>
          <Divider orientation="vertical" />
          <Tooltip content="믹스 레벨 계산기입니다. (출처 : fokerface님)">
            <Link
              isBlock
              isExternal
              showAnchorIcon
              href="https://khflower.github.io/Mix-level-calculator/mixlevel"
              color="foreground"
            >
              믹스레벨계산기
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
