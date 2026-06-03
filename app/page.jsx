import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Videos from '@/components/Videos'
import Brands from '@/components/Brands'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PreloaderWrapper from '@/components/PreloaderWrapper'

export default function Home() {
  return (
    <>
      <PreloaderWrapper />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Videos />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  )
}