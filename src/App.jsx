import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import SimpleSlider from './components/hero/SimpleSlider'
import HowWeDoIt from './components/howwedoit/HowWeDoIt'
import Menu from './components/menu/menu'
import OurServices from './components/ourServices/OurServices'
import Review from './components/review/review'
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
