export default function Contact() {     
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Верхняя часть */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Компания */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ООО "Мурман - Дизель"</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Мы делаем качественный ремонт Дизельных форсунок
                        </p>
                    </div>

                    {/* Навигация */}
                    <div className="text-center sm:text-left sm:pl-0 lg:pl-10">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Разделы сайта</h4>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li>
                                <a href="#main" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#service" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Адрес */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Адрес</h4>
                        <div className="space-y-2 sm:space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium text-sm sm:text-base">
                                    г. Мурманск, Кооперативная 4/4
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Связь</h4>
                        <div className="space-y-2 sm:space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium text-sm sm:text-base">+7 (911) 3001755</p>
                                <p className="text-xs sm:text-sm text-gray-400">Телефон для связи</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">+79533023022</p>
                                <p className="text-xs sm:text-sm text-gray-400">WhatsApp/Viber</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base leading-tight">
                                    ПН-ПТ 09:00 – 18:00<br />
                                    СБ 10:00 - 17:00<br />
                                    ВС: Выходной
                                </p>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">Время работы</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-xs sm:text-sm">
                       ООО «Мурман - Дизель». Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}