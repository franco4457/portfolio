import '@/styles/globals.css'
import Providers from '@/components/Providers'
import Layout from '@/components/Layout'

export default function App ({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
