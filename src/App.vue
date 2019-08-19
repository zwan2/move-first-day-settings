<template>
  <b-container>
    <header>
      <img
        class="header__img"
        src="https://camo.githubusercontent.com/2e1439a908997308fad66e447dcb69faee3a5e08/68747470733a2f2f63646e2e6372657762692e636f6d2f736b696e2f6372657762695f76332f6173736574732f696d672f6c6f676f5f6372657762692e706e67"
      />
      <h2>다음 앱들을 설치&가입하세요.</h2>
      <hr/>
    </header>
    <div v-for="(value, key) in categories" :key="value.id">
      <h3>{{key}}</h3>
      <CategoryList :category="value" />
    </div>
  </b-container>
</template>

<script>
import CategoryList from "./components/CategoryList";

export default {
  name: "App",
  components: {
    CategoryList
  },
  data() {
    return {
      categories: {
        Communication: [
          {
            id: 0,
            title: "G-suite",
            content:
              "메일, 캘린더 등에 사용하는 기업용 구글계정입니다. 다른 앱들도 이 계정으로 가입합니다. (관리자가 계정 발급)",
            icon:
              "https://lh3.googleusercontent.com/QuDUoYDi2-yyoDRMcD6OKnq74Beg7x6Yup3XQ09HmrdbzYImdVsWpXpMMpvPLfaS8Y9bxh5ezNwyl5sa3XyVisF2JG0pwZqHUAq2",
            link: "https://gsuite.google.com"
          },
          {
            id: 1,
            title: "Slack",
            content: "팀 커뮤니케이션에 사용합니다.",
            icon:
              "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-08-512.png",
            link: "https://slack.com/intl/en-kr/downloads"
          },

          {
            id: 2,
            title: "Workplace",
            content: "사내 게시판입니다. G-suite 계정으로 가입합니다. ",
            icon:
              "https://cdn.brandfolder.io/B7C054OK/as/oowzgx-eyc1bs-do1jmu/Workplace_Symbol.png",
            link: "https://www.facebook.com/workplace"
          },
          {
            id: 3,
            title: "개발팀 구글 캘린더",
            content: "개발팀 내 휴가 일정을 관리합니다. (관리자가 계정 추가) ",
            icon:
              "https://lh3.googleusercontent.com/foIlOOzsv0jbTTd67d_WVXH2frdRMlgjTrdDrDAgNWMoqjXmUaG8TgLsXixcpYa2ysoMUwntgfU=w128-h128-e365",
            link: "#"
          }
        ],
        IDE: [
          {
            id: 0,
            title: "PhpStorm",
            content: "",
            icon: "https://t1.daumcdn.net/cfile/tistory/255652335795BAD90B",
            link: "https://www.jetbrains.com/phpstorm/"
          }
        ],
        DevOps: [
          {
            id: 0,
            title: "AWS",
            content: "(관리자가 계정 발급)",
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/300px-Amazon_Web_Services_Logo.svg.png",
            link: "https://aws.amazon.com"
          },
          {
            id: 1,
            title: "NodePing",
            content: "웹사이트 모니터링 도구",
            icon:
              "https://pbs.twimg.com/profile_images/1032012824103407617/aJ-ByF7z_400x400.jpg",
            link: "https://nodeping.com/"
          }
        ],
        ApplicationData: [
          {
            id: 0,
            title: "Node.js",
            content: "For Gulp",
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            link: "https://nodejs.org/ko/download"
          },
          {
            id: 1,
            title: "Ruby",
            content: "For Gulp",
            icon: "https://www.ruby-lang.org/images/header-ruby-logo.png",
            link: "https://www.ruby-lang.org/ko/downloads/"
          },
          {
            id: 2,
            title: "PHP",
            content: "For Composer",
            icon: "https://www.php.net/images/logos/php-logo.svg",
            link: "https://www.php.net/downloads.php"
          },
          {
            id: 3,
            title: "Composer",
            content: "For PHP Dependency Managing",
            icon: "https://getcomposer.org/img/logo-composer-transparent5.png",
            link: "https://getcomposer.org/download/"
          }
        ],
        Utilities: [
          {
            id: 0,
            title: "putty",
            content: "개발 서버 원격 접속에 사용합니다. (Package files 설치)",
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/PuTTY_icon_128px.png/75px-PuTTY_icon_128px.png",
            link:
              "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
          },
          {
            id: 1,
            title: "OpenVPN",
            content: "개발 서버 접속에 필요한 VPN 관리도구입니다.",
            icon: "https://img.stackshare.io/service/3061/aJ-ByF7z_400x400.jpg",
            link: "https://openvpn.net/community-downloads"
          },
          {
            id: 2,
            title: "MysqlWorkbench",
            content: "DB GUI 관리도구입니다.",
            icon:
              "https://dl2.macupdate.com/images/icons256/31829.png?d=1565271308",
            link: "https://dev.mysql.com/downloads/workbench/"
          },
          {
            id: 3,
            title: "Sourcetree",
            content: "Git GUI 관리도구입니다.",
            icon:
              "https://chocolatey.org/content/packageimages/SourceTree.3.1.3.svg",
            link: "https://www.sourcetreeapp.com/"
          },
          {
            id: 4,
            title: "Zeplin",
            content: "디자이너와의 협업도구입니다.",
            icon: "https://zeplin.io/static/img/icZeplin.svg",
            link: "https://zeplin.io"
          }
        ],
        Security: [
          {
            id: 0,
            title: "1Password",
            content: "비밀번호 관리 도구입니다.",
            icon: "https://1password.com/img/logo-v1.svg",
            link: "https://1password.com/ko/downloads"
          },
          {
            id: 1,
            title: "Bitdefender",
            content: "백신. 광복님께 다운로드 URL을 받아 설치합니다.",
            icon:
              "https://download.bitdefender.com/resources/themes/draco/images/lite_v2/logo.svg",
            link: "https://www.bitdefender.com/"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.header__img {
  margin: 20px 0;
}
a {
  color: #212121 !important;
  &:disabled {
    pointer-events: none;
  }
}
</style>