import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import test from '@components/test'
import React from "react"
import vicoo from './vico.JPG'
import test2 from './test2'
import about from './about'

export default function Home() {
  return (
    
     <div className="App">
    <image src={vicoo} className="slidering"/>
    </div>


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
  
    <div>
       <h1>Home</h1>
       <link href="./about.js"/>
       <p> Just a description </p>
    </div>
   
  <ul id="menu" class="vertical main">
   <li>Homepage</li>
   <li>Services</li>
   <li>About</li>
   <li>Contact</li>
  </ul>
    
      <Footer />
    </div>
  );
}



//Get started by editing <code>pages/index.js</code>; 
