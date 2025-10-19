import animationAbout  from './animationAbout';
function AnimatedCard({ delay = '0s', children }) {
  const [ref, isInView] = animationAbout();

  return (
    <div
      ref={ref}
      className={`
        transition-opacity duration-3000 ease-out
        ${isInView 
            ? 'opacity-100' 
            : 'opacity-0'
        }
        `}
      style={{ 
        transitionDelay: isInView ? delay : '0.1s' 
      }}
    >
      {children}
    </div>
  );
}
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white relative py-16">
      <h1 className="text-4xl font-bold mb-10">Почему выбирают нас?</h1>

      <div className="grid gap-6  grid-cols-1 md:grid-cols-2 auto-rows-[250px] px-6 w-full max-w-7xl">
        {/* 1  */}
        <AnimatedCard delay="0.1s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/gear.svg" alt="gear" />
            
            <h2 className="text-2xl font-bold mb-2">Оборудование</h2>
            <p className="text-base">
              Мы используем только профессиональное оборудование и запчасти для ремонта
            </p>
          </div>
        </AnimatedCard>

        {/* 2 */}
        <AnimatedCard delay="0.15s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/like.svg" alt="like" />
            <h2 className="text-2xl font-bold mb-2">Качество</h2>
            <p className="text-base">
              Мы отвечаем за качество выполненных работ и даём собственные гарантии
            </p>
          </div>
        </AnimatedCard>

        {/* 3 */}
        <AnimatedCard delay="0.2s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/person.svg" alt="person" />
            <h2 className="text-2xl font-bold mb-2">Персонал</h2>
            <p className="text-base">
              Профессиональная подготовка в официальном центре Common Rail
            </p>
          </div>
        </AnimatedCard>

        {/* 4 */}
        <AnimatedCard delay="0.25s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/number1.svg" alt="number1" />
            <h2 className="text-2xl font-bold mb-2">Номер 1</h2>
            <p className="text-base">
              Наши клиенты пользуются нашими услугами и рекомендуют нас
            </p>
          </div>
        </AnimatedCard>

        {/* 5 */}
        <AnimatedCard delay="0.3s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/speed.svg" alt="speed" />
            <h2 className="text-2xl font-bold mb-2">Скорость</h2>
            <p className="text-base">
              Выполняем работы по ремонту в самые кратчайшие сроки
            </p>
          </div>
        </AnimatedCard>

        {/* 6 */}
        <AnimatedCard delay="0.35s">
          <div className="border border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-800 
          flex flex-col justify-center items-center text-center h-full bg-gray-900 rounded-2xl shadow-lg p-6">
            <img className="w-16 h-16 mb-4" src="./images/happy.svg" alt="happy" />
            <h2 className="text-2xl font-bold mb-2">Клиенты</h2>
            <p className="text-base">
              Самая лучшая награда для нас — это положительные отзывы клиентов
            </p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}