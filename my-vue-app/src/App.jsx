import Header from  './headerScroll';
import Hero from './heroSection';
import Service from './serviceSection';
import About from './aboutSection';
import Contact from './contactSection';
import Footer from './footerSection';
export function App() {
  return (
    
    <div className= " relative h-full  bg-black scroll-smooth">
      <section id="main">
     <Header  />
     </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="service">
     <Service />
     </section>
     <section id="about">
     <About />
     </section>
     <section id="contact">
     <Contact />
     </section>
     <Footer />
    </div>
    
    

  );
}
export default App
