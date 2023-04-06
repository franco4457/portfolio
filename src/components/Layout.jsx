import Head from 'next/head'
import Navbar from './NavBar'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <>
    <Head>
        <title>Franco Gutierrez</title>
    </Head>

      <Navbar />
      <main className="mx-auto w-full flex min-h-[90vh] max-w-3xl flex-1">{children}</main>
      <Footer />
    </>

  )
}
