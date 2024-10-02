import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '项目仓库',
    items: [
      {
        icon: 'https://yizhan.wiki/NitWikit/img/book.png',
        title: 'NitWikit',
        desc: '一群笨蛋们编写的开服教程',
        link: 'https://github.com/postyizhan/NitWikit',
      },
      {
        icon: 'https://www.emojiall.com/images/60/apple/1f602.png',
        title: 'lezi-wiki',
        desc: '集百处之乐，成一家之言',
        link: 'https://github.com/postyizhan/lezi-wiki',
      },
    ],
  },
  {
    title: 'MineBBS资源（插件）',
    items: [
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9059.jpg',
        title: 'DecentHolograms 内核汉化',
        desc: '当前全球用户数量最多的全息图/浮空字插件',
        link: 'https://www.minebbs.com/resources/decentholograms.9059/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9107.jpg',
        title: 'Citizens2 内核汉化',
        desc: '老牌知名npc插件（单jar多mc版本支持）',
        link: 'https://www.minebbs.com/resources/citizens2-cn-npc-jar-mc.9107/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9084.jpg',
        title: 'Nova及addon',
        desc: '新生代的插件服玩法框架',
        link: 'https://www.minebbs.com/resources/nova.9084/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9080.jpg',
        title: 'TrMenu',
        desc: '全能高级动态菜单插件（社区版）',
        link: 'https://www.minebbs.com/resources/trmenu-bug.9080/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9079.jpg',
        title: 'Craftorithm',
        desc: '多功能合成插件（国人开发）',
        link: 'https://www.minebbs.com/resources/craftorithm-gui.9079/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9076.jpg',
        title: 'TerraformGenerator',
        desc: '一个好看的开源免费世界生成器',
        link: 'https://www.minebbs.com/resources/terraformgenerator.9076/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9075.jpg',
        title: 'FastAsyncWorldEdit',
        desc: '比原版we更快的异步创世神！',
        link: 'https://www.minebbs.com/resources/fastasyncworldedit-we.9075/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9074.jpg',
        title: 'WorldGuard',
        desc: '知名老牌 区域保护/世界保护 插件',
        link: 'https://www.minebbs.com/resources/worldguard-worldguard.9074/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9062.jpg',
        title: 'Waypoints',
        desc: '可用于导航 ，传送点，玩家地标的开源免费插件',
        link: 'https://www.minebbs.com/resources/waypoints-gui.9062/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9057.jpg',
        title: 'TAB',
        desc: '全能高级的 TAB & 计分板 二合一插件',
        link: 'https://www.minebbs.com/resources/tab-tab.9057/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9024.jpg',
        title: 'ResourceHack',
        desc: '插件+客户端mod的 资源包/材质包 保护',
        link: 'https://www.minebbs.com/resources/mod.9024/',
      },
    ],
  },
  {
    title: 'MineBBS资源（其他）',
    items: [
      {
        icon: 'https://img.fastmirror.net/s/2024/08/21/66c53f77ddec4.png',
        title: 'Leaf',
        desc: '国人开发的高性能插件端核心',
        link: 'https://www.minebbs.com/resources/leaf.9242/',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9045.jpg',
        title: 'emojis',
        desc: '适用于 ItemsAdder 插件的表情包配置',
        link: 'https://www.minebbs.com/resources/emojis-itemsadder.9045/',
      },
      {
        icon: 'https://img.fastmirror.net/s/2024/08/20/66c491fb25125.png',
        title: '笨蛋签到',
        desc: 'Invero 的签到系统',
        link: 'https://www.minebbs.com/resources/.9237/',
      },
    ],
  },
  {
    title: '笔记本',
    items: [
      {
        icon: 'https://img.fastmirror.net/s/2024/10/02/66fcb3dcaeff0.jpg',
        title: '冒传',
        desc: '猫咪轮船启动！',
        link: '/catship.md',
      },
    ],
  },
]
