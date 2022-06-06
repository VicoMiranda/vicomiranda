import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>VicoMiranda's Homepage </title>
        <link rel="icon" href="/myicon.ico" />
      </Head>

      <main>
        <Header title="Victor Miranda Lecturer" />
        <p className="description">
          Lecturer 
         </p>
          <p>
          Lecturer <br /> Auckland University of Technology Level 9, WZ Building, City Campus.
         </p>
      </main>
    
      <Footer />
    </div>
  )
Hola1
//Hola1;
}

//Get started by editing <code>pages/index.js</code>; 
