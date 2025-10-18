import Header from  './headerScroll';
export function App() {
  return (
    <div className="w-full h-3000">
    <div className= " relative min-h-screen">
     <Header />
    <section className="absolute inset-0 -z-10 h-screen overflow-hidden mt-0">
      <video
        className="absolute top-0 left-0 w-full h-900px object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
      <source src="./public/video/vehicle.mp4" type="video/mp4" />
      </video>
      <div>здесь</div>
    </section>
    </div>
    </div>

  );
}
export default App
