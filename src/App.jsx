import {useRef, useState} from 'react';
import './App.css'
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import Back from './components/Back.jsx';


function App() {

    const homeRef = useRef();
    const productsRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();
    const [cartcount, setCartCount] = useState(0);

      const addToCart = () => {
      setCartCount(prev => prev +1)
    };

    const scrollTo = (ref) => {
      ref.current.scrollIntoView({behavior : "smooth"});
    }

  return (
    <>
      <Header
      scrollTo={scrollTo}
      refs = {{homeRef, productsRef, aboutRef, contactRef}}
      
      />
      <section ref={homeRef} className='min-h-screen  pt-24'>

        <Home   scrollTo = {scrollTo} productsRef = {productsRef} contactRef = {contactRef}/>

      </section>

      <section ref={productsRef} className='min-h-screen '>
        <Header cartcount = {cartcount}
      scrollTo={scrollTo}
      refs = {{homeRef, productsRef, aboutRef, contactRef}}
      
      />
        <Products addToCart = {addToCart} />
      </section>
      <section ref={aboutRef} className='min-h-screen '>
        <About />
      </section>
      <section ref={contactRef} className='min-h-screen '>
        <Contact scrollTo={scrollTo} homeRef={homeRef} />
      </section>
      <Back scrollTo={scrollTo} homeRef={homeRef} />
      <Footer />
    </>
  )
}

export default App
