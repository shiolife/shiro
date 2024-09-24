import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://shiroka.top/',
  favicon:"https://s1.imagehub.cc/images/2024/03/07/261b5a5cdd2de46a25602ad58cb10b4c.jpeg",
  lang: 'zh-CN',
  title: '白花的猫不会飞',
  author: {
    name: '王梦歌',
    avatar: 'https://s1.imagehub.cc/images/2024/05/02/9e1d211d3e2cf2f70bf946eff40e03c9.jpeg',
  },
  description: '愿能再度相逢梦中',
  subtitle: 'All at sky.',
  social: [
    
    {
      name: 'QQ 群 864540602',
      link: 'https://qm.qq.com/q/s8je2hdowU',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/shiolife',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },

    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },

    {
      name: 'E-Mail',
      link: 'mailto:198963653@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      // {
      //   name: '支付宝',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
      //   color: '#00A3EE',
      //   icon: 'i-ri-alipay-line',
      // },
      // {
      //   name: 'QQ 支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
      //   color: '#12B7F5',
      //   icon: 'i-ri-qq-line',
      // },
      {
        name: '微信支付',
        url: 'https://s1.imagehub.cc/images/2024/02/14/fd0f5df21faac5b72ce1b147319f418c.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
