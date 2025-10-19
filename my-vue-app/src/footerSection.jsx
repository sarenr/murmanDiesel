  export default function Contact() {     
    return (
        <div>
       <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
            {/* Верхняя часть */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Компания */}
                <div>
                    <h3 className="text-xl font-bold mb-4">ООО "Мурман - Дизель"</h3>
                    <p className="text-gray-300">
                    Мы делаем качественный ремонт Дизельных форсунок
                    </p>
                </div>

          {/* Навигация */}
          <div className="pl-10">
            <h4 className="text-lg font-bold mb-4">Разделы сайта</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#main" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Адрес */}
          <div>
            <h4 className="text-lg font-bold mb-4">Адрес</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">г. Мурманск, Кооперативная 4/4</p>
                
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div>
            <h4 className="text-lg font-bold mb-4">Связь</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">+7 (911) 3001755</p>
                <p className="text-sm">Телефон для связи</p>
              </div>
              <div>
                <p className="font-medium">+79533023022</p>
                <p className="text-sm">WhatsApp/Viber</p>
              </div>
              <div>
                <p className="font-medium">ПН-ПТ 09:00 – 18:00, <br />СБ 10:00 - 17:00,<br />  ВС: Выходной</p>
                <p className="text-sm">Время работы</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Группа компаний «Норд Майнинг». Все права защищены.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
        
    