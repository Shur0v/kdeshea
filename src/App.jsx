import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import SimpleSlider from './components/hero/SimpleSlider'
import HowWeDoIt from './components/howwedoit/HowWeDoIt'
import Menu from './components/menu/Menu'
import OurServices from './components/ourservices/OurServices'
import Review from './components/review/Review'
import WeddingSection from './components/weddingandevent/WeddingSection'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <SimpleSlider />
      <WeddingSection />
      <div id="services"><OurServices /></div>
      <div id="process"><HowWeDoIt /></div>
      <div id="review"><Review /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
