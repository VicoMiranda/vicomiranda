import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Victor Miranda's Homepage</title>
        <link rel="icon" href="/myicon.ico" />
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
Hola1
//Hola1;
}

//Get started by editing <code>pages/index.js</code>; 
