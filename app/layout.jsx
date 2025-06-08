import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}


const navbar = (
  <Navbar
    logo={<b>Portfolio & Trials</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()}. All materials are fictional and shared as a demo. </Footer>


export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head faviconGlyph="✦" />
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
