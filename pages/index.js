import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Victor Miranda" />
        <p className="description">
 
          Auckland University of Technology
         </p>
      </main>
    
      <Footer />
    </div>
  )
}
//Get started by editing <code>pages/index.js</code>; 
