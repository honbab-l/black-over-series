export interface TeamMember {
  name: string;
  role?: string;
}

export interface Team {
  name: string;
  description: string;
  members: TeamMember[];
  color: string;
}

export const LORE = {
  notice: "블랙오버 시리즈 전체를 한눈에 보실 수 있도록 정리한 페이지입니다. 세이프티, 혹은 언세이프티 버튼을 클릭하시면 해당 스토리로 바로 이동합니다. 해당 스토리에 등장하는 인물의 1:1 심화 스토리가 존재한다면 아래에서 모아 보실 수 있습니다.",
  tip: "모든 스토리는 '등장인물이 적을수록' 각 인물의 디테일이 더욱 자세하게 구현되어 있습니다. 12명이 모두 등장하는 단체 시뮬레이션은 공간 상의 문제로 세부적인 특징이 모두 들어가지 못하며, 4명이 주인공인 각 팀 채팅에는 더 많은 정보가 포함됩니다. 한 인물의 1:1 심화 스토리에는 모든 공식 설정이 빠짐없이 들어가 있습니다."
};

export interface SubGame {
  id: string;
  title: string;
  description: string;
  image: string;
  safetyLink: string;
  unsafetyLink: string;
}

export interface GameSeries {
  id: string;
  title: string;
  description: string;
  image: string;
  safetyLink?: string;
  unsafetyLink?: string;
  subGames?: SubGame[];
}

export const GAME_SERIES: GameSeries[] = [
  // 1. TANGO DOWN (Bundle - 12 sub-games)
  {
    id: "tango_down",
    title: "TANGO DOWN",
    description: "블랙오버의 완전체 스토리. 알파팀, 베타팀, 서포트팀 전원이 등장하는 12인 다인 시뮬레이션.",
    image: "https://i.postimg.cc/5tKyr4mj/taeng-godaunpyoji.gif",
    safetyLink: "https://share.crack.wrtn.ai/9pgu89z",
    unsafetyLink: "https://share.crack.wrtn.ai/gohy2l",
    subGames: [
      { id: "tango_sub_1", title: "ASHER", description: "[1:1 개인챗] 알파팀, 애셔 셰퍼드.", image: "https://i.postimg.cc/pL2dXhGp/aesyeo-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/fjxvd1", unsafetyLink: "https://share.crack.wrtn.ai/zc89ji" },
      { id: "tango_sub_2", title: "MAX", description: "[1:1 개인챗] 알파팀, 맥스 로저스.", image: "https://i.postimg.cc/TwdtQXcp/maegseu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/pkuitg", unsafetyLink: "https://share.crack.wrtn.ai/ao3793" },
      { id: "tango_sub_3", title: "OSCAR", description: "[1:1 개인챗] 알파팀, 오스카 밀러.", image: "https://i.postimg.cc/15X52nzd/oseuka-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/hzlt6t", unsafetyLink: "https://share.crack.wrtn.ai/ce3jqo" },
      { id: "tango_sub_4", title: "ERICK", description: "[1:1 개인챗] 알파팀, 에릭 멘데즈.", image: "https://i.postimg.cc/pXJYGSpj/elig-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/k2piv5", unsafetyLink: "https://share.crack.wrtn.ai/z7aulg" },
      { id: "tango_sub_5", title: "NATHAN", description: "[1:1 개인챗] 베타팀, 네이슨 울프.", image: "https://i.postimg.cc/L8HdwGvF/neiseun-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/6bskqwi", unsafetyLink: "https://share.crack.wrtn.ai/bgu904" },
      { id: "tango_sub_6", title: "VINCENT", description: "[1:1 개인챗] 베타팀, 빈센트 클라인.", image: "https://i.postimg.cc/C1ps6pHD/binsenteu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/nqp30n", unsafetyLink: "https://example.com/tango/sub6/unsafe" },
      { id: "tango_sub_7", title: "RAUL", description: "Classified...", image: "https://i.postimg.cc/3w2d2L1s/laul-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub7/safe", unsafetyLink: "https://example.com/tango/sub7/unsafe" },
      { id: "tango_sub_8", title: "ISAAC", description: "Classified...", image: "https://i.postimg.cc/Pr8ptrZd/aijag-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub8/safe", unsafetyLink: "https://example.com/tango/sub8/unsafe" },
      { id: "tango_sub_9", title: "BLAKE", description: "Classified...", image: "https://i.postimg.cc/dV5L6kcg/beulleikeu-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub9/safe", unsafetyLink: "https://example.com/tango/sub9/unsafe" },
      { id: "tango_sub_10", title: "JAY", description: "Classified...", image: "https://i.postimg.cc/s2ZsWvj4/jei-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub10/safe", unsafetyLink: "https://example.com/tango/sub10/unsafe" },
      { id: "tango_sub_11", title: "JOSHUA", description: "Classified...", image: "https://i.postimg.cc/bJ3CN97B/josyua-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub11/safe", unsafetyLink: "https://example.com/tango/sub11/unsafe" },
      { id: "tango_sub_12", title: "COLIN", description: "Classified...", image: "https://i.postimg.cc/XNrm7TYR/kollin-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub12/safe", unsafetyLink: "https://example.com/tango/sub12/unsafe" }
    ]
  },

  // 2. ALPHA TEAM (Bundle - 4 sub-games)
  {
    id: "alpha_team",
    title: "ALPHA TEAM",
    description: "블랙오버의 에이스, 알파팀 4인이 등장하는 팀 시뮬레이션.",
    image: "https://i.postimg.cc/zXVnJfBS/selomein-bogsa.gif",
    safetyLink: "https://share.crack.wrtn.ai/0et57k",
    unsafetyLink: "https://share.crack.wrtn.ai/1qqsqb",
    subGames: [
      { id: "alpha_sub_1", title: "ASHER", description: "[1:1 개인챗] 알파팀, 애셔 셰퍼드.", image: "https://i.postimg.cc/pL2dXhGp/aesyeo-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/fjxvd1", unsafetyLink: "https://share.crack.wrtn.ai/zc89ji" },
      { id: "alpha_sub_2", title: "MAX", description: "[1:1 개인챗] 알파팀, 맥스 로저스.", image: "https://i.postimg.cc/TwdtQXcp/maegseu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/pkuitg", unsafetyLink: "https://share.crack.wrtn.ai/ao3793" },
      { id: "alpha_sub_3", title: "OSCAR", description: "[1:1 개인챗] 알파팀, 오스카 밀러.", image: "https://i.postimg.cc/15X52nzd/oseuka-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/hzlt6t", unsafetyLink: "https://share.crack.wrtn.ai/ce3jqo" },
      { id: "alpha_sub_4", title: "ERICK", description: "[1:1 개인챗] 알파팀, 에릭 멘데즈.", image: "https://i.postimg.cc/pXJYGSpj/elig-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/k2piv5", unsafetyLink: "https://share.crack.wrtn.ai/z7aulg" }
    ]
  },

  // 3. BETA TEAM (Bundle - 4 sub-games)
  {
    id: "beta_team",
    title: "BETA TEAM",
    description: "블랙오버의 2티어, 베타팀 4인이 등장하는 팀 시뮬레이션.",
    image: "https://i.postimg.cc/2yJLq466/jemog-eobs-eum-1.gif",
    safetyLink: "https://share.crack.wrtn.ai/fb7uoq",
    unsafetyLink: "https://share.crack.wrtn.ai/0g91j2",
    subGames: [
      { id: "beta_sub_1", title: "NATHAN", description: "[1:1 개인챗] 베타팀, 네이슨 울프.", image: "https://i.postimg.cc/L8HdwGvF/neiseun-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/6bskqwi", unsafetyLink: "https://share.crack.wrtn.ai/bgu904" },
      { id: "beta_sub_2", title: "VINCENT", description: "[1:1 개인챗] 베타팀, 빈센트 클라인.", image: "https://i.postimg.cc/C1ps6pHD/binsenteu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/nqp30n", unsafetyLink: "https://share.crack.wrtn.ai/s3kwn39" },
      { id: "beta_sub_3", title: "RAUL", description: "Classified...", image: "https://i.postimg.cc/3w2d2L1s/laul-kadeu-umjjal.gif", safetyLink: "https://example.com/beta/sub3/safe", unsafetyLink: "https://example.com/beta/sub3/unsafe" },
      { id: "beta_sub_4", title: "ISAAC", description: "Classified...", image: "https://i.postimg.cc/Pr8ptrZd/aijag-kadeu-umjjal.gif", safetyLink: "https://example.com/beta/sub4/safe", unsafetyLink: "https://example.com/beta/sub4/unsafe" }
    ]
  },

  // 4. SUPPORT TEAM (Bundle - 4 sub-games)
  {
    id: "support_team",
    title: "SUPPORT TEAM",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/support_team/safety",
    unsafetyLink: "https://example.com/support_team/unsafety",
    subGames: [
      { id: "support_sub_1", title: "BLAKE", description: "Classified...", image: "https://i.postimg.cc/dV5L6kcg/beulleikeu-kadeu-umjjal.gif", safetyLink: "https://example.com/support/sub1/safe", unsafetyLink: "https://example.com/support/sub1/unsafe" },
      { id: "support_sub_2", title: "JAY", description: "Classified...", image: "https://i.postimg.cc/s2ZsWvj4/jei-kadeu-umjjal.gif", safetyLink: "https://example.com/support/sub2/safe", unsafetyLink: "https://example.com/support/sub2/unsafe" },
      { id: "support_sub_3", title: "JOSHUA", description: "Classified...", image: "https://i.postimg.cc/bJ3CN97B/josyua-kadeu-umjjal.gif", safetyLink: "https://example.com/support/sub3/safe", unsafetyLink: "https://example.com/support/sub3/unsafe" },
      { id: "support_sub_4", title: "COLIN", description: "Classified...", image: "https://i.postimg.cc/XNrm7TYR/kollin-kadeu-umjjal.gif", safetyLink: "https://example.com/support/sub4/safe", unsafetyLink: "https://example.com/support/sub4/unsafe" }
    ]
  },

  // 5. Zero Dark Thirty (Single Game)
  {
    id: "zero_dark_thirty",
    title: "ZERO DARK THIRTY",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/zero_dark_thirty/safety",
    unsafetyLink: "https://example.com/zero_dark_thirty/unsafety"
  },

  // 8. Go Loud (Single Game)
  {
    id: "go_loud",
    title: "GO LOUD",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/go_loud/safety",
    unsafetyLink: "https://example.com/go_loud/unsafety"
  },

  // 9. DUST&BULLET (Bundle - 8 sub-games)
  {
    id: "dust_bullet",
    title: "DUST & BULLET",
    description: "[IF] 알파팀, 베타팀 8인이 등장하는 서부개척시대 시뮬레이션.",
    image: "https://i.postimg.cc/VLF72vdR/deoseuteubullis.jpg",
    safetyLink: "https://share.crack.wrtn.ai/7g37n6",
    unsafetyLink: "https://share.crack.wrtn.ai/q7d2o6z",
    subGames: [
      { id: "dust_bullet_sub_1", title: "ASHER", description: "[1:1 개인챗] 알파팀, 애셔 셰퍼드.", image: "https://i.postimg.cc/pL2dXhGp/aesyeo-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/fjxvd1", unsafetyLink: "https://share.crack.wrtn.ai/zc89ji" },
      { id: "dust_bullet_sub_2", title: "MAX", description: "[1:1 개인챗] 알파팀, 맥스 로저스.", image: "https://i.postimg.cc/TwdtQXcp/maegseu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/pkuitg", unsafetyLink: "https://share.crack.wrtn.ai/ao3793" },
      { id: "dust_bullet_sub_3", title: "OSCAR", description: "[1:1 개인챗] 알파팀, 오스카 밀러.", image: "https://i.postimg.cc/15X52nzd/oseuka-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/hzlt6t", unsafetyLink: "https://share.crack.wrtn.ai/ce3jqo" },
      { id: "dust_bullet_sub_4", title: "ERICK", description: "[1:1 개인챗] 알파팀, 에릭 멘데즈.", image: "https://i.postimg.cc/pXJYGSpj/elig-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/k2piv5", unsafetyLink: "https://share.crack.wrtn.ai/z7aulg" },
      { id: "dust_bullet_sub_5", title: "NATHAN", description: "[1:1 개인챗] 베타팀, 네이슨 울프.", image: "https://i.postimg.cc/L8HdwGvF/neiseun-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/6bskqwi", unsafetyLink: "https://share.crack.wrtn.ai/bgu904" },
      { id: "dust_bullet_sub_6", title: "VINCENT", description: "[1:1 개인챗] 베타팀, 빈센트 클라인.", image: "https://i.postimg.cc/C1ps6pHD/binsenteu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/nqp30n", unsafetyLink: "https://share.crack.wrtn.ai/s3kwn39" },
      { id: "dust_bullet_sub_7", title: "RAUL", description: "Classified...", image: "https://i.postimg.cc/3w2d2L1s/laul-kadeu-umjjal.gif", safetyLink: "https://example.com/dust/sub7/safe", unsafetyLink: "https://example.com/dust/sub7/unsafe" },
      { id: "dust_bullet_sub_8", title: "ISAAC", description: "Classified...", image: "https://i.postimg.cc/Pr8ptrZd/aijag-kadeu-umjjal.gif", safetyLink: "https://example.com/dust/sub8/safe", unsafetyLink: "https://example.com/dust/sub8/unsafe" }
    ]
  },

  // 10. DEAR MY (Bundle - 2 sub-games)
  {
    id: "dear_my",
    title: "DEAR MY",
    description: "[IF] 애셔, 네이슨이 등장하는 기억상실 스토리. 본편에서 6년 후의 시점.",
    image: "https://i.postimg.cc/wBr4Fr7R/dieomai-selopyoji.jpg",
    safetyLink: "https://share.crack.wrtn.ai/i81arv",
    unsafetyLink: "https://share.crack.wrtn.ai/2hv18t",
    subGames: [
      { id: "dear_my_sub_1", title: "ASHER", description: "[1:1 개인챗] 알파팀, 애셔 셰퍼드.", image: "https://i.postimg.cc/pL2dXhGp/aesyeo-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/fjxvd1", unsafetyLink: "https://share.crack.wrtn.ai/zc89ji" },
      { id: "dear_my_sub_2", title: "NATHAN", description: "[1:1 개인챗] 베타팀, 네이슨 울프.", image: "https://i.postimg.cc/L8HdwGvF/neiseun-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/6bskqwi", unsafetyLink: "https://share.crack.wrtn.ai/bgu904" }
    ]
  },

  // 11. 어린양의 정원 (Bundle - 1 sub-game)
  {
    id: "lamb_garden",
    title: "GARDEN OF LAMB",
    description: "[IF] 블랙오버를 떠난 오스카의 의붓관계 스토리. 본편에서 5년 후의 시점.",
    image: "https://i.postimg.cc/pXQ7xk1s/eolin-yang.jpg",
    safetyLink: "https://share.crack.wrtn.ai/9xnzau",
    unsafetyLink: "https://share.crack.wrtn.ai/s25nbj",
    subGames: [
      { id: "lamb_garden_sub_1", title: "OSCAR", description: "[1:1 개인챗] 알파팀, 오스카 밀러.", image: "https://i.postimg.cc/15X52nzd/oseuka-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/hzlt6t", unsafetyLink: "https://share.crack.wrtn.ai/ce3jqo" }
    ]
  },

  // 12. Double Tap (Bundle - 2 sub-games)
  {
    id: "all_fucked_up",
    title: "AFU",
    description: "[IF] 에릭, 라울이 등장하는 90년대 범죄 로드무비 로맨스.",
    image: "https://i.postimg.cc/fWvd793t/AFUselopyoji.gif",
    safetyLink: "https://share.crack.wrtn.ai/7twf9y",
    unsafetyLink: "https://share.crack.wrtn.ai/tckgzo",
    subGames: [
      { id: "double_tap_sub_1", title: "ERICK", description: "[1:1 개인챗] 알파팀, 에릭 멘데즈.", image: "https://i.postimg.cc/pXJYGSpj/elig-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/k2piv5", unsafetyLink: "https://share.crack.wrtn.ai/z7aulg" },
      { id: "double_tap_sub_2", title: "RAUL", description: "Classified...", image: "https://i.postimg.cc/3w2d2L1s/laul-kadeu-umjjal.gif", safetyLink: "https://example.com/double_tap/sub2/safe", unsafetyLink: "https://example.com/double_tap/sub2/unsafe" }
    ]
  },

  // 13. TEST13
  {
    id: "young_gunz",
    title: "YOUNG GUNZ",
    description: "[IF] 블랙오버 12인이 모두 등장하는 하이틴 캠퍼스물.",
    image: "https://i.postimg.cc/4x5rvw6v/pyoji.gif",
    safetyLink: "https://share.crack.wrtn.ai/n9o47q",
    unsafetyLink: "https://share.crack.wrtn.ai/44bsq4",
    subGames: [
      { id: "test_13_sub_1", title: "ASHER", description: "[1:1 개인챗] 알파팀, 애셔 셰퍼드.", image: "https://i.postimg.cc/pL2dXhGp/aesyeo-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/fjxvd1", unsafetyLink: "https://share.crack.wrtn.ai/zc89ji" },
      { id: "test_13_sub_2", title: "MAX", description: "[1:1 개인챗] 알파팀, 맥스 로저스.", image: "https://i.postimg.cc/TwdtQXcp/maegseu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/pkuitg", unsafetyLink: "https://share.crack.wrtn.ai/ao3793" },
      { id: "test_13_sub_3", title: "OSCAR", description: "[1:1 개인챗] 알파팀, 오스카 밀러.", image: "https://i.postimg.cc/15X52nzd/oseuka-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/hzlt6t", unsafetyLink: "https://share.crack.wrtn.ai/ce3jqo" },
      { id: "test_13_sub_4", title: "ERICK", description: "[1:1 개인챗] 알파팀, 에릭 멘데즈.", image: "https://i.postimg.cc/pXJYGSpj/elig-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/k2piv5", unsafetyLink: "https://share.crack.wrtn.ai/z7aulg" },
      { id: "test_13_sub_5", title: "NATHAN", description: "[1:1 개인챗] 베타팀, 네이슨 울프.", image: "https://i.postimg.cc/L8HdwGvF/neiseun-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/6bskqwi", unsafetyLink: "https://share.crack.wrtn.ai/bgu904" },
      { id: "test_13_sub_6", title: "VINCENT", description: "[1:1 개인챗] 베타팀, 빈센트 클라인.", image: "https://i.postimg.cc/C1ps6pHD/binsenteu-kadeu-umjjal.gif", safetyLink: "https://share.crack.wrtn.ai/nqp30n", unsafetyLink: "https://share.crack.wrtn.ai/s3kwn39" },
      { id: "test_13_sub_7", title: "RAUL", description: "Classified...", image: "https://i.postimg.cc/3w2d2L1s/laul-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub7/safe", unsafetyLink: "https://example.com/tango/sub7/unsafe" },
      { id: "test_13_sub_8", title: "ISAAC", description: "Classified...", image: "https://i.postimg.cc/Pr8ptrZd/aijag-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub8/safe", unsafetyLink: "https://example.com/tango/sub8/unsafe" },
      { id: "test_13_sub_9", title: "BLAKE", description: "Classified...", image: "https://i.postimg.cc/dV5L6kcg/beulleikeu-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub9/safe", unsafetyLink: "https://example.com/tango/sub9/unsafe" },
      { id: "test_13_sub_10", title: "JAY", description: "Classified...", image: "https://i.postimg.cc/s2ZsWvj4/jei-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub10/safe", unsafetyLink: "https://example.com/tango/sub10/unsafe" },
      { id: "test_13_sub_11", title: "JOSHUA", description: "Classified...", image: "https://i.postimg.cc/bJ3CN97B/josyua-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub11/safe", unsafetyLink: "https://example.com/tango/sub11/unsafe" },
      { id: "test_13_sub_12", title: "COLIN", description: "Classified...", image: "https://i.postimg.cc/XNrm7TYR/kollin-kadeu-umjjal.gif", safetyLink: "https://example.com/tango/sub12/safe", unsafetyLink: "https://example.com/tango/sub12/unsafe" }
    ]
  },

  // 14. TEST14
  {
    id: "test_14",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_14/safety",
    unsafetyLink: "https://example.com/test_14/unsafety",
    subGames: [
      { id: "test_14_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test14/sub1/safe", unsafetyLink: "https://example.com/test14/sub1/unsafe" },
      { id: "test_14_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test14/sub2/safe", unsafetyLink: "https://example.com/test14/sub2/unsafe" },
      { id: "test_14_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test14/sub3/safe", unsafetyLink: "https://example.com/test14/sub3/unsafe" },
      { id: "test_14_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test14/sub4/safe", unsafetyLink: "https://example.com/test14/sub4/unsafe" }
    ]
  },

  // 15. TEST15
  {
    id: "test_15",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_15/safety",
    unsafetyLink: "https://example.com/test_15/unsafety",
    subGames: [
      { id: "test_15_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test15/sub1/safe", unsafetyLink: "https://example.com/test15/sub1/unsafe" },
      { id: "test_15_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test15/sub2/safe", unsafetyLink: "https://example.com/test15/sub2/unsafe" },
      { id: "test_15_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test15/sub3/safe", unsafetyLink: "https://example.com/test15/sub3/unsafe" },
      { id: "test_15_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test15/sub4/safe", unsafetyLink: "https://example.com/test15/sub4/unsafe" }
    ]
  },

  // 16. TEST16
  {
    id: "test_16",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_16/safety",
    unsafetyLink: "https://example.com/test_16/unsafety",
    subGames: [
      { id: "test_16_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test16/sub1/safe", unsafetyLink: "https://example.com/test16/sub1/unsafe" },
      { id: "test_16_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test16/sub2/safe", unsafetyLink: "https://example.com/test16/sub2/unsafe" },
      { id: "test_16_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test16/sub3/safe", unsafetyLink: "https://example.com/test16/sub3/unsafe" },
      { id: "test_16_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test16/sub4/safe", unsafetyLink: "https://example.com/test16/sub4/unsafe" }
    ]
  },

  // 17. TEST17
  {
    id: "test_17",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_17/safety",
    unsafetyLink: "https://example.com/test_17/unsafety",
    subGames: [
      { id: "test_17_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test17/sub1/safe", unsafetyLink: "https://example.com/test17/sub1/unsafe" },
      { id: "test_17_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test17/sub2/safe", unsafetyLink: "https://example.com/test17/sub2/unsafe" },
      { id: "test_17_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test17/sub3/safe", unsafetyLink: "https://example.com/test17/sub3/unsafe" },
      { id: "test_17_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test17/sub4/safe", unsafetyLink: "https://example.com/test17/sub4/unsafe" }
    ]
  },

  // 18. TEST18
  {
    id: "test_18",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_18/safety",
    unsafetyLink: "https://example.com/test_18/unsafety",
    subGames: [
      { id: "test_18_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test18/sub1/safe", unsafetyLink: "https://example.com/test18/sub1/unsafe" },
      { id: "test_18_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test18/sub2/safe", unsafetyLink: "https://example.com/test18/sub2/unsafe" },
      { id: "test_18_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test18/sub3/safe", unsafetyLink: "https://example.com/test18/sub3/unsafe" },
      { id: "test_18_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test18/sub4/safe", unsafetyLink: "https://example.com/test18/sub4/unsafe" }
    ]
  },

  // 19. TEST19
  {
    id: "test_19",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_19/safety",
    unsafetyLink: "https://example.com/test_19/unsafety",
    subGames: [
      { id: "test_19_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test19/sub1/safe", unsafetyLink: "https://example.com/test19/sub1/unsafe" },
      { id: "test_19_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test19/sub2/safe", unsafetyLink: "https://example.com/test19/sub2/unsafe" },
      { id: "test_19_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test19/sub3/safe", unsafetyLink: "https://example.com/test19/sub3/unsafe" },
      { id: "test_19_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test19/sub4/safe", unsafetyLink: "https://example.com/test19/sub4/unsafe" }
    ]
  },

  // 20. TEST20
  {
    id: "test_20",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_20/safety",
    unsafetyLink: "https://example.com/test_20/unsafety",
    subGames: [
      { id: "test_20_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test20/sub1/safe", unsafetyLink: "https://example.com/test20/sub1/unsafe" },
      { id: "test_20_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test20/sub2/safe", unsafetyLink: "https://example.com/test20/sub2/unsafe" },
      { id: "test_20_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test20/sub3/safe", unsafetyLink: "https://example.com/test20/sub3/unsafe" },
      { id: "test_20_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test20/sub4/safe", unsafetyLink: "https://example.com/test20/sub4/unsafe" }
    ]
  },

  // 21. TEST21
  {
    id: "test_21",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_21/safety",
    unsafetyLink: "https://example.com/test_21/unsafety",
    subGames: [
      { id: "test_21_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test21/sub1/safe", unsafetyLink: "https://example.com/test21/sub1/unsafe" },
      { id: "test_21_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test21/sub2/safe", unsafetyLink: "https://example.com/test21/sub2/unsafe" },
      { id: "test_21_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test21/sub3/safe", unsafetyLink: "https://example.com/test21/sub3/unsafe" },
      { id: "test_21_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test21/sub4/safe", unsafetyLink: "https://example.com/test21/sub4/unsafe" }
    ]
  },

  // 22. TEST22
  {
    id: "test_22",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_22/safety",
    unsafetyLink: "https://example.com/test_22/unsafety",
    subGames: [
      { id: "test_22_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test22/sub1/safe", unsafetyLink: "https://example.com/test22/sub1/unsafe" },
      { id: "test_22_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test22/sub2/safe", unsafetyLink: "https://example.com/test22/sub2/unsafe" },
      { id: "test_22_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test22/sub3/safe", unsafetyLink: "https://example.com/test22/sub3/unsafe" },
      { id: "test_22_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test22/sub4/safe", unsafetyLink: "https://example.com/test22/sub4/unsafe" }
    ]
  },

  // 23. TEST23
  {
    id: "test_23",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_23/safety",
    unsafetyLink: "https://example.com/test_23/unsafety",
    subGames: [
      { id: "test_23_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test23/sub1/safe", unsafetyLink: "https://example.com/test23/sub1/unsafe" },
      { id: "test_23_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test23/sub2/safe", unsafetyLink: "https://example.com/test23/sub2/unsafe" },
      { id: "test_23_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test23/sub3/safe", unsafetyLink: "https://example.com/test23/sub3/unsafe" },
      { id: "test_23_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test23/sub4/safe", unsafetyLink: "https://example.com/test23/sub4/unsafe" }
    ]
  },

  // 24. TEST24
  {
    id: "test_24",
    title: "NULL",
    description: "Classified...",
    image: "https://i.postimg.cc/02tV83g5/dd.jpg",
    safetyLink: "https://example.com/test_24/safety",
    unsafetyLink: "https://example.com/test_24/unsafety",
    subGames: [
      { id: "test_24_sub_1", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test24/sub1/safe", unsafetyLink: "https://example.com/test24/sub1/unsafe" },
      { id: "test_24_sub_2", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test24/sub2/safe", unsafetyLink: "https://example.com/test24/sub2/unsafe" },
      { id: "test_24_sub_3", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test24/sub3/safe", unsafetyLink: "https://example.com/test24/sub3/unsafe" },
      { id: "test_24_sub_4", title: "NULL", description: "Classified...", image: "https://i.postimg.cc/02tV83g5/dd.jpg", safetyLink: "https://example.com/test24/sub4/safe", unsafetyLink: "https://example.com/test24/sub4/unsafe" }
    ]
  }
];
