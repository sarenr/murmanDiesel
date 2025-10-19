import Header from  './headerScroll';
import Hero from './heroSection';
import Service from './serviceSection';
import About from './aboutSection';
import Contact from './contactSection';
export function App() {
  return (
    
    <div className= " relative h-full  bg-black">
     <Header />
     <Hero />
     <Service />
     <About />
     <Contact />
    </div>
    

  );
}
export default App
