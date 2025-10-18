import Header from  './headerScroll';
import Hero from './heroSection';
import Service from './serviceSection';
import About from './aboutSection';
export function App() {
  return (
    
    <div className= " relative h-full  bg-black">
     <Header />
     <Hero />
     <Service />
     <About />
    </div>
    

  );
}
export default App
