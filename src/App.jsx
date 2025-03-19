import './App.css'
import Contact from './components/contact/Contact'
import Featured from './components/featured/Featured'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import SimpleSlider from './components/hero/SimpleSlider'
import HowWeDoIt from './components/howwedoit/HowWeDoIt'
import Menu from './components/menu/menu'
import OurServices from './components/ourServices/OurServices'
import Review from './components/review/review'
import WeddingSection from './components/weddingandevent/WeddingSection'
import WhereWeDoIt from './components/wherewedoit/WhereWeDoIt'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Menu />
      <SimpleSlider />
      <WeddingSection />
      <OurServices />
      <HowWeDoIt />
      <WhereWeDoIt />
      <Review />
      <Gallery />
      <Contact />
      <Featured />
      <Footer />
    </BrowserRouter>
  )
}

export default App
