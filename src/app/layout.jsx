import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Search } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        template: '%s | BannatieNet',
        default: 'BannatieNet'
    },
    description: '播客《半拿铁 | 商业沉浮录》中出现的歇后语和俏皮话的【非官方】"数据集"。',
    metadataBase: new URL('https://bannatienet.eddiehe.top/'),
    openGraph: {
        title: 'BannatieNet',
        description: '播客《半拿铁 | 商业沉浮录》中出现的歇后语和俏皮话的【非官方】"数据集"。',
        url: 'https://bannatienet.eddiehe.top/',
        siteName: 'BannatieNet',
        images: [
            {
                url: 'https://podlink.imgix.net/9a227780e55c4575eacf2492a0b46bb2/poster.jpeg',
                width: 1200,
                height: 630
            }
        ],
        locale: 'zh_CN',
        type: 'website'
    },
    icons: {
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>'
    }
}

const navbar = (
    <Navbar
        logo={<b>☕ BannatieNet</b>}
        projectLink="https://github.com/eddiehe99/bannatienet"
    // ... Your additional navbar options
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="zh-CN"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    sidebar={{
                        defaultMenuCollapseLevel: 1
                    }}
                    docsRepositoryBase="https://github.com/eddiehe99/bannatienet/tree/main"
                    footer={footer}
                // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}