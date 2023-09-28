import Link from "next/link"
import "../styles/global.css"
import Head from "next/head"





// export const metadata = {
//   icons:{
//     icon: './favicon.ico'
//   }
// }





export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>ChatBot</title>
      <meta name="description" content='this Bot can generate meme and provid eyou mental health advice' />
      <link rel="icon" href="/favicon.icon"/>
    </Head>
      <div className="footer">
        <p>
          <Link href="/">Mental Health Advisor</Link>
          <Link href="/art">Meme Generator</Link>
        </p>
      </div>
      <Component {...pageProps} />
    </>
  )
}
