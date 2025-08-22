import Head from 'next/head'
import Header from '../componenets/Header'
import Hero from '../componenets/Hero'
import Heritage from '../componenets/Heritage'
import Products from '../componenets/Products'
import Testimonials from '../componenets/Testimonials'
import Footer from '../componenets/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Head>
        <title>Nawabi Sweets - Traditional Lucknow Sweets Since 1892</title>
        <meta name="description" content="Experience the royal taste of authentic Lucknowi sweets with over 130 years of heritage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Heritage />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}
