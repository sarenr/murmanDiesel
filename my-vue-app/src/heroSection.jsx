
export default function Hero() {
  return (
<div className="relative h-screen">          {/* Контейнер */}
  <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
      <source src="./public/video/vehicle.mp4" type="video/mp4" />
      </video>                      {/* Видео-фон */}
  <div className="mt-60 h-full ml-45 absolute inset-0 max-w-3xl">        {/* Контент поверх видео */}
    <div className="flex items-center space-x-4">
    <button className="!px-3 !py-1  text-white  rounded-lg transition-colors">+7 911 300-17-55</button>
    <button className="!px-3 !py-1 bg-green-700 hover:bg-green-600 text-white  rounded-3xl transition-colors">Обратный звонок</button>
    <p className="">г. Мурманск улица Кооперативная 4/4</p>
    </div>
    <h1 className="text-5xl font-bold ">Качественный ремонт и диагностика дизельных двигателей</h1>
    <p className="text-2xl mt-6">Профессиональная диагностика кодирование и ремонт форсунок</p>
    <p className="text-2xl">Обучение впраска топливных систем</p>
    <p className="text-2xl">Ремонт турбин</p><br />
    <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">Оставить заявку</button>
    
  </div>
  <div className='w-1/3 text-white'> 
      список преймуществ 
  </div>
  
</div>
 );
}