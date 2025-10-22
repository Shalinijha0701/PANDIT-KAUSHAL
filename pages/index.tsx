import Head from 'next/head'
import ChakraHero from '../components/ChakraHero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pandit Kaushal — Book Priests & Puja Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <ChakraHero />
        </div>
      </main>
    </div>
  )
}
