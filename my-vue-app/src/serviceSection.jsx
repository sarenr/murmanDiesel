import animationCard  from './animationCard';
function ServiceCard({ delay, children }) {         {/* анимация для карточек */}
  const [ref, isInView] = animationCard();

  return (
    <div
      ref={ref}
      className={`flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isInView ? delay : '0s' }}
    >
      {children}
    </div>
  );
}
export default function Service() {
  return (
<div className="pt-20  flex flex-col h-full bg-black relative">          {/* Контейнер */}
    <h1 className="px-45 text-3xl font-bold ">Наши услуги</h1>
    <p className="px-45 text-xl mt-6">Полный комплекс оказываемых нами  услуг по ремонту и обсуживанию дизельных двигателей</p>
    <div className="px-35">
<div className=" grid grid-cols-1 md:grid-cols-6 gap-5">{/* Здесь будут карточки */}
  <ServiceCard delay="0.1s">
    <div className=" flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2">{/* Первая карточка */}
        <img className="" src="./public/images/card1.webp" alt=""/>
        <h3 className="mt-4 text-xl font-bold mb-4">Ремонт дизельных форсунок Delphi E3, CATERPILLAR C6, C7, С9, SCANIA HPI</h3>
        <div className="mt-auto mb-2">
        <p className="mb-4">
        от 14000 р
        </p>
        </div>
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
         Подробнее →
        </button>
    </div> 
    </ServiceCard>
    <ServiceCard delay="0.2s">
    <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2">{/* Вторая карточка */}
        <img className="" src="./public/images/card2.webp" alt="" />
        <h3 className="mt-4 text-xl font-bold mb-4">Кодирование форсунок - присвоение ремонтных кодов для дальнейшей их записи в ЭБУ</h3>
         <div className="mt-auto mb-2"> 
            <p className="mb-4">
            Цена зависит от тех. задания
            </p>
        </div>
       
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Подробнее →
         </button>
    </div> 
    </ServiceCard>
    <ServiceCard delay="0.3s">
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2 line-clamp-3  min-w-[130px]">{/* Третяя карточка */}
        <img className="" src="./public/images/card3.webp" alt="" />
        <h3 className="mt-4 text-xl font-bold mb-4">Профессиональный ремонт любых форсунок Common Rail</h3>
         <div className="mt-auto mb-2"> 
            <p className="mb-4">
            От 4000 р
            </p>
        </div>
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Подробнее →
         </button>
    </div> 
    </ServiceCard>
    <ServiceCard delay="0.4s">
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2">{/* Четвертая карточка */}
        <img className="" src="./public/images/card4.webp" alt="" />
        <h3 className="mt-4 text-xl font-bold mb-4">Диагностика форсунок Bosch Delphi Siemens Denso</h3>
        <div className="mt-auto mb-2"> 
            <p className="mb-4">
            От 800 р
            </p>
        </div>
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Подробнее →
         </button>
    </div> 
    </ServiceCard>
      <ServiceCard delay="0.5s">
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2">{/* Пятая карточка */}
        <img className="" src="./public/images/card5.webp" alt="" />
        <h3 className="mt-4 text-xl font-bold mb-4">Диагностика и ремонт дизельных форсунок Ford Transit. Обучение впрыска топливных систем Denso и Siemens</h3>
          <div className="mt-auto mb-2"> 
            <p className="mb-4">
            От 2000 р
            </p>
        </div>
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Подробнее →
         </button>
    </div> 
    </ServiceCard>
    <ServiceCard delay="0.6s">
    <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-2">{/* Шестая карточка */}
        <img className="" src="./public/images/card6.webp" alt="" />
        <h3 className="mt-4 text-xl font-bold mb-4">Ремонт турбин в Мурманске</h3>
         <div className="mt-auto mb-2"> 
            <p className="mb-4">
            От 2000 р
            </p>
        </div>
        <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Подробнее →
         </button>
    </div> 
    </ServiceCard>
</div>
</div>
  
    <div className="mx-45 my-20 bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-lg p-8 text-white text-center">{/* Нет нужной услуги */}
     <h1 className="mt-4 text-3xl font-bold mb-4">Не нашли нужной услуги?</h1>
     <p className="text-lg mb-6">
        Готовы рассмотреть нестандартный случай и предложить решение под ваши задачи.
    </p>
    <button className="!px-2 !py-3 font-extrabold bg-blue-500 hover:bg-blue-600 text-white  !rounded-ms transition-colors">
      +7 911 300-17-55
    </button>
  
    </div>
</div>


 );
}