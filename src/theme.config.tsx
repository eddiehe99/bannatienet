/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config = {
  logo: (
    <>
      ☕
      <span>BannatieNet</span>
    </>
  ),
  project: {
    link: 'https://github.com/eddiehe99/bannatienet'
  },
  docsRepositoryBase: 'https://github.com/eddiehe99/bannatienet/tree/main',
  // editLink: {
  //   component: null
  // },
  // feedback: {
  //   content: null
  // },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    )
  },
  faviconGlyph: '☕',
  // useNextSeoProps() {
  //   const { asPath } = useRouter()
  //   if (asPath !== '/') {
  //     return {
  //       titleTemplate: '%s - BannatieNet'
  //     }
  //   }
  // },
  // head: (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     {/* <meta property="og:title" content="BannatieNet" /> */}
  //     <meta
  //       property="og:description"
  //       content="播客《半拿铁 | 商业沉浮录》中出现的歇后语和俏皮话的【非官方】“数据集”。"
  //     />
  //     <meta
  //       property="og:url"
  //       content="https://eddiehe99.github.io/bannatienet/"
  //     />
  //     <meta
  //       property="og:image"
  //       content="https://podlink.imgix.net/9a227780e55c4575eacf2492a0b46bb2/poster.jpeg"
  //     />
  //   </>
  // ),
  head() {
    const config = useConfig()
    const { route } = useRouter()
    const title = config.title + (route === '/' ? '' : ' | BannatieNet')
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {/* <meta property="og:title" content="BannatieNet" /> */}
        <meta
          property="og:description"
          content="播客《半拿铁 | 商业沉浮录》中出现的歇后语和俏皮话的【非官方】“数据集”。"
        />
        <meta
          property="og:url"
          content="https://eddiehe99.github.io/bannatienet/"
        />
        <meta
          property="og:image"
          content="https://podlink.imgix.net/9a227780e55c4575eacf2492a0b46bb2/poster.jpeg"
        />
      </>
    )
  }
}

export default config
