import CallToAction from "../components/home/CallToAction"
import Features from "../components/home/Features"
import Footer from "../components/home/Footer"
import Hero from "../components/home/hero"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <Testimonial/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
