const path = require("path");
const fs = require("fs");

export default {
  base: '/rty-docs/',
  title: "rty-docs",
  description: "learning studing self-taught",
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    // logo: "/.vitepress/images/lion.png",
    lastUpdatedText: "Updated Date",
    socialLinks: [{ icon: "github", link: "https://github.com/jgsrty" }],
    nav: nav(),
    sidebar: {
      "/chineseLiterature": [
        {
          text: "汉语言文学",
          items: getSidebar("chineseLiterature"),
        },
      ],
      "/music/": [
        {
          text: "Music",
          items: getSidebar("music"),
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2099-present rty",
    },
  },
};

function nav() {
  return [
    {
      text: "汉语言文学",
      link: "/chineseLiterature/外国文学史",
    },
    // {
    //   text: '组件',
    //   link: '/components/introduction'
    // },
    {
      text: "Music",
      link: "/music/Beautiful In White",
      activeMatch: "/music/",
    },
    {
      text: "了解更多",
      items: [
        { text: "掘金", link: "https://juejin.cn/user/2154698520407687/posts" },
        { text: "码云gitee", link: "https://gitee.com/RtyXmd" },
        { text: "简书", link: "https://www.jianshu.com/u/0f735486a824" },
        { text: "移动端Music", link: "http://47.100.53.108:7300/#/index" },
        {
          text: "管理后台模板",
          link: "http://47.100.53.108:9527/#/charts/pieChart",
        },
      ],
    },
  ];
}

function getSidebar(dir) {
  let group = [];
  let p = path.join(__dirname, "../", dir);
  let files = fs.readdirSync(p);
  files.map((file) => {
    let title = path.basename(file, ".md");
    let text = "";
    let link = "";
    text = title;
    link = "/" + dir + "/" + title;
    group.push({ text, link });
  });
  return group;
}
