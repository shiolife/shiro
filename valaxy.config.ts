import { defineValaxyConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-sakura'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',

  themeConfig: {
    banner: {
      urls: [
        'https://s1.imagehub.cc/images/2024/03/18/66ae67d31fc806bd34d832ad9677356a.webp',
        //  'https://s1.imagehub.cc/images/2024/03/13/f2df262865468251812b0e2c41bd021e.png',
        'https://www.loliapi.com/acg/',
        'https://wrxinyue-images.s3.bitiful.net/wallpaper/Genshin%20Impact%20-%20Yae%20Miko%20(4)%20Cybust%20PC.mp4'
      ],
      title: 'Hello, shiroka',
      motto: '浪漫是生存的源泉。对于治病而言也是一样的哦.',
      style: '',
    },

        // 置顶文章
        articlePinned: [ {
          title: 'shiroka',
          desc: 'shiroka',
          img: 'https://cdn.jsdelivr.net/gh/Hazuki-295/Hazuki-295.github.io@latest/assets/image/20220104003437.jpg',
          link: 'https://shiroka.top/',
        },
    
        {
          title: '#',
          desc: '#',
          img: 'https://s1.imagehub.cc/images/2024/04/05/64beef5734227c769fe8a525d866b91c.jpeg',
          link: '#',
        },
        {
          title: '刮刮乐',
          desc: '很有意思，图片募集',
          img: "https://s1.imagehub.cc/images/2024/04/03/661a5478695ecda0f04b67a395ae536a.jpeg",
          link: 'https://scratchcard.pages.dev/',
        }
      ],




    navbarTitle: [
      'Shiroka',
      '💮',
      '',
    ],

    navbar: [
      {
        text: '🐖原梦之星',
        link: 'https://ym.shiroka.top/',
      },
      
    ],


    footer: {
      since: 2024,
      powered: false,

    },
  },

  unocss: { safelist },
})
