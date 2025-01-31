import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/NOTEBOOK/',
  title: 'NOTEBOOK',
  description: '',
//  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Sealdice',
        items: [
          { text: '代挂事宜',
            items: [
              { text: 'm522', link: '/sealdice/m522'}
            ]
          }
        ]
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '懒得做了', link: '' },
          // ...
        ],
      },
    ],
  },
});
