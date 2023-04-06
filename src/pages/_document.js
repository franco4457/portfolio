import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-stone-900 bg-zinc-100 h-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
