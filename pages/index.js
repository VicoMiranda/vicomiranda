import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import test from '@components/test'
import React from "react"
import vicoo from './vico.JPG'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>VicoMiranda's Homepage </title>
        <link rel="icon" href="/myicon.ico" />
      </Head>

      <main>
        <Header title="Victor Miranda" />
        <p className="description">
         Department of Mathematical Sciences <br /> Auckland University of Technology (AUT) <br /> 55 Wellesley Street East <br /> Auckland 1010 <br /> New Zealand.
         </p>
      </main>
    
      <Footer />
    </div>
  );
}

export default function test() {
 return (
   <main>
   <p> Heeeello
   </p>
   </main>
   );
}

//Get started by editing <code>pages/index.js</code>; 
