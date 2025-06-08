import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

 
export const metadata = {}


const navbar = (
  <Navbar
    logo={<b>⚡️ Portfolio & Trials</b>}
  />
)
const footer = <Footer>© {new Date().getFullYear()}. All materials are fictional and shared as a demo.</Footer>


export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <title></title>
        <link
          rel="icon"
          href={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>⚡️</text></svg>`}
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          editLink={null}
          footer={footer}
          feedback={{content: null}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
