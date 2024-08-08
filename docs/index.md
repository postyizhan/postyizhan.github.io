---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 驿站的
  text: 导航页面
  tagline: 驿站的主页以及导航站
  image:
    src: /logo.png
    alt: 茂茂物语
  actions:
    - text: 主页
      link: /home
    - text: 导航站
      link: /nav/
      theme: alt
    - text: QQ群
      link: /qq
      theme: alt
features:
  - icon: 📖
    title: NitWikit
    details: 由一群笨蛋们编写的开服教程
    link: https://yizhan.wiki/NitWikit
    linkText: 点击查阅
  - icon: 📘
    title: lezi-wiki
    details: 集百处之乐，成一家之言
    link: https://yizhan.wiki/lezi-wiki/
    linkText: 乐子文档
  - icon: 💡
    title: MineBBS上的驿站
    details: 看看驿站在 MineBBS 发过什么资源
    link: https://www.minebbs.com/members/postyizhan.33452/#resources
    linkText: 此处前往
  - icon: 🧰
    title: 导航页面
    details: 收集常用的地址，工具，网站
    link: /nav/
    linkText: 让我康康
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
