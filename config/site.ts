export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MixMaster AU",
  description: "호주믹스마스터 공략사이트입니다.",
  navItems: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "계산기",
      href: "/mix_calculate",
    },
    {
      label: "게시판",
      href: "/board",
    },
    {
      label: "주요링크",
      href: "/link",
    },
  ],
  navMenuItems: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "계산기",
      href: "/mix_calculate",
    },
    {
      label: "게시판",
      href: "/board",
    },
    {
      label: "주요링크",
      href: "/link",
    },
  ],
  links: {
    github: "https://github.com/moonjjj",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    cafe: "https://cafe.naver.com/mixmasterau",
    download: "https://global.playmixmaster.com/download",
  },
};