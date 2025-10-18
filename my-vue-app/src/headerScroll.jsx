import { useState, useEffect } from 'react';
export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
// gagga
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-transparent shadow-none' 
        : 'bg-black/15 backdrop-blur-md shadow-lg'
    }`}>
      {/* <nav className="container px-6 py-2 space-x-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
            <img src="https://avatars.mds.yandex.net/get-altay/4476499/2a000001819009e1067ea767160b97f1233e/S_height" alt="" width={150} height={150}/>

          <div className="space-x-6 text-white">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Главная</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Услуга</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Контакты</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Фото</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Статьи</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Отзывы</a>
          </div>
        </div>
        <button className="font-extrabold ml-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Оставить заявку
          </button>
      </nav> */}
      <nav className="mx-40 px-6 py-3">
        {/* Логотип здесь */}
   <div className=" font-bold flex items-center justify-between">
    
    <div><img src="./public/images/logo.png" alt="" /></div>
            {/* Навигационные ссылки здесь */}
    <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Главная</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Услуга</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Контакты</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Фото</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Статьи</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors text-sm">Отзывы</a>
            {/* Кнопка здесь */}
            <button className="font-extrabold ml-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Оставить заявку
          </button>
    </div>
    
    
    
  </div>
</nav>
    </header>
  );
}