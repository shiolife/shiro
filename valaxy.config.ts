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


    navbarTitle: [
      'Shiroka',
      '💮',
      '',
    ],


    footer: {
      since: 2024,
      powered: false,

    },
  },

  unocss: { safelist },
})
