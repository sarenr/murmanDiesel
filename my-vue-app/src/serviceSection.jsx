
export default function Service() {
  return (
<div className="pt-20 px-45 flex flex-col h-full bg-black relative">          {/* Контейнер */}
    <h1 className="text-3xl font-bold ">Наши услуги</h1>
    <p className="text-xl mt-6">Полный комплекс оказываемых нами  услуг по ремонту и обсуживанию дизельных двигателей</p>
<div className="grid grid-cols-1 md:grid-cols-6 gap-8">{/* Здесь будут карточки */}
    <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Первая карточка */}
        <img className="" src="./public/images/card1.webp" alt="" />
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
    <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Вторая карточка */}
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
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Третяя карточка */}
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
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Четвертая карточка */}
        <img className="" src="./public/images/card3.webp" alt="" />
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
     <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Пятая карточка */}
        <img className="" src="./public/images/card3.webp" alt="" />
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
    <div className="flex flex-col h-full mt-8 bg-gray-800 rounded-lg shadow-lg p-6">{/* Шестая карточка */}
        <img className="" src="./public/images/card3.webp" alt="" />
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
</div>
<div className="my-20 bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-lg p-8 text-white text-center">{/* Нет нужной услуги */}
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