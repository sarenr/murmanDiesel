  export default function Contact({ delay, children }) {         {/* анимация для карточек */} 
    return (
    //    ФОРМА
        <div>
        <div className="mx-45 my-20 bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-lg p-8 text-white text-center h-full">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Узнать стоимость ремонта за 5 минут
                </h1>
                <p className="text-xl text-gray-300">
                    Оставьте заявку прямо сейчас, мы свяжемся с Вами и сообщим стоимость ремонта!
                </p>
                </div>
                <form className="space-y-6">
                {/* Имя */}
                <div className="px-70">
                    <label className="block text-white text-lg font-medium mb-2">
                    Ваше имя
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Введите ваше имя"
                    />
                </div>
                {/* Телефон */}
                <div  className="px-70">
                    <label className="block text-white text-lg font-medium mb-2">
                    Контактный телефон
                    </label>
                    <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="+7 (___)-___-__-__"
                    />
                </div>
                {/* Автомобиль */}
                <div  className="px-70">
                    <label className="block text-white text-lg font-medium mb-2">
                    Марка автомобиля и год выпуска
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Например: Toyota Camry 2018"
                    />
                </div>
                <button
                    type="submit"
                    className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors" >
                    Отправить заявку
                </button>
                </form>
            </div>
                <h1 className="px-90 text-3xl font-bold ">Контакты</h1>
                <p className="px-90 text-xl mt-6">Как вы можете связаться с нами</p>
                <div className="px-75">
                <div className="mt-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
                                 {/* Адрес */}
                     <div className="bg-gray-900 rounded-2xl p-1 border border-gray-700 h-auto w-auto">
                        <h3 className="text-sm font-bold text-white mb-1">Адрес</h3>
                        <p className="text-gray-300 text-sm mb-1">
                        г. Мурманск, Кооперативная 4/4</p>
                    </div>
                                {/* Телефоны */}
                     <div className="bg-gray-900 rounded-2xl p-1 border border-gray-700 h-auto w-auto">
                        <h3 className="text-sm font-bold text-white mb-1">Ремонт форсунок</h3>
                        <p className="text-gray-300 text-sm mb-1">
                        +7 (911) 3001755
                        </p>
                        
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-1 border border-gray-700 h-auto w-auto">
                        
                        <h3 className="text-sm font-bold text-white mb-1">Ремонт турбин</h3>
                        <p className="text-gray-300 text-sm mb-1">
                        +7 (911) 3001199
                        </p>
                    </div>
                               {/* WhatsApp */}
                    <div className="bg-gray-900 rounded-2xl p-1 border border-gray-700 h-auto w-auto">
                        <h3 className="text-sm font-bold text-white mb-1">WhatsApp и Viber</h3>
                        <p className="text-gray-300 text-sm mb-1">
                        +79533023022 (Антон)
                        </p>
                        
                    </div>
            
                            {/* Часы работы */}
                    <div className="bg-gray-900 rounded-2xl p-1 border border-gray-700 h-auto w-auto">
                        <h3 className="text-sm font-bold text-white mb-1">Пн-Пт с 10.00 до 18.00</h3>
                        <p className="text-gray-300 text-sm mb-1">
                         
                        </p>
                        <p className="text-gray-300 text-sm mb-1">
                          Суббота с 10.00 до 17.00
                        </p>
                        <p className="text-gray-300 text-sm mb-1">
                          Воскресенье - выходной
                        </p>
                    </div>
                    <div className="bg-gray-500 h-100 w-300 flex justify-center items-center mb-3">
                        <h1>Тут будет карта</h1>
                    </div>           
        </div>
      </div>
    </div>
    
     );
}