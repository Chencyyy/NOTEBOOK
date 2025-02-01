import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/NOTEBOOK/',
  title: 'NOTEBOOK',
  description: '',

  themeConfig: {
    
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'DND',
        items: [
          { text: 'Wiki', link: '/dnd/wiki'},
          { text: '角色',
            items: [
              { text: 'Bell', link: '/dnd/bell/index'}
            ]
          }
        ]
      },
      { text: '鸣潮', link: '/wuthering/wuwa_echo'},
      { text: 'COD 剧情解说', link: '/cod/cod_story'},
      { text: 'Sealdice',
        items: [
          { text: '海豹手册', link: 'https://docs.sealdice.com/'},
          { text: '分离部署',
            items: [
              { text: '指导手册', link: 'https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/Config/'},
              { text: '使用文件', link: 'https://github.com/LagrangeDev/Lagrange.Core/releases'}
          ]
          },
          { text: '其它',
            items: [
              { text: '代挂事宜', link: '/sealdice/m522'}
            ]
          }
        ]
      },
      { text: 'QQ 相关链接', link: '/qq/qq_helpful_links'},
    ],

    sidebar: [
      { text: 'DND',
        collapsed: true,
        items: [
          { text: 'Wiki', link: '/dnd/wiki'},
          { text: '角色',
            collapsed: true,
            items: [
              { text: 'Bell', link: '/dnd/bell/index'}
            ]
          }
        ]
      },
      { text: '鸣潮', link: '/wuthering/wuwa_echo'},
      { text: 'COD 剧情解说', link: '/cod/cod_story'},
      { text: 'Sealdice',
        collapsed: true,
        items: [
          { text: '海豹手册', link: 'https://docs.sealdice.com/'},
          { text: '分离部署',
            collapsed: true,
            items: [
              { text: '指导手册', link: 'https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/Config/'},
              { text: '使用文件', link: 'https://github.com/LagrangeDev/Lagrange.Core/releases'}
          ]
          },
          { text: '其它',
            collapsed: true,
            items: [
              { text: '代挂事宜', link: '/sealdice/m522'}
            ]
          }
        ]
      },
      { text: 'QQ 相关链接', link: '/qq/qq_helpful_links'},
    ],
  },
});
