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
     <div className=" flex flex-col  items-center justify-center h-full bg-black relativ ">  
        <h1 className="text-4xl font-bold ">Почему выбирают нас?</h1>
       
        <div className=" px-45 grid grid-cols-1 md:grid-cols-2 gap-5">{/* Здесь будут карточки */}
        <AnimatedCard delay="0.1s">
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 1 карточка */}
                <img className=" w-16 h-16" src="./public/images/gear.svg" alt="" width={45} height={45} />
                <h2 className=" text-2xl font-bold mb-4">Оборудование</h2>
                <h3  className=" text-xl  mb-4" > Мы используем только профессиональное оборудование и запчасти для ремонта</h3>       
        </div> 
        </AnimatedCard>
         <AnimatedCard delay="0.1s">
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 2 карточка */}
                <img className=" w-16 h-16" src="./public/images/like.svg" alt="" width={45} height={45}/>
                <h2 className=" text-2xl font-bold mb-4">Качество</h2>
                <h3 className=" text-xl  mb-4" > Мы отвечаем за качество выполненных работ и даём собственные гарантии</h3>       
            </div> 
         </AnimatedCard>   
         <AnimatedCard delay="0.1s">     
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 3 карточка */}
                <img className=" w-16 h-16" src="./public/images/person.svg" alt="" width={45} height={45}/>
                <h2 className="text-2xl font-bold mb-4">Персонал</h2>
                <h3 className="text-xl  mb-4" >Профессиональная подготовк в официальном центре Common Rail</h3>       
            </div> 
        </AnimatedCard>      
        <AnimatedCard delay="0.1s">  
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 4 карточка */}
                <img className="w-16 h-16" src="./public/images/number1.svg" alt="" width={45} height={45}/>
                <h2 className="text-2xl font-bold mb-4">Номер 1</h2>
                <h3 className="text-xl  mb-4" >Наши клиенты пользуются нашими услугами и рекомендуют</h3>       
            </div> 
        </AnimatedCard> 
        <AnimatedCard delay="0.1s"> 
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 5 карточка */}
                <img className="w-16 h-16" src="./public/images/speed.svg" alt="" width={45} height={45}/>
                <h2 className="text-2xl font-bold mb-4">Скорость</h2>
                <h3 className="text-xl  mb-4" >Выполняем работы по ремонту в самые кратчайшие сроки</h3>       
            </div> 
        </AnimatedCard>
        <AnimatedCard delay="0.1s">     
            <div className=" flex flex-col items-center text-center h-full mt-8 bg-black rounded-lg shadow-lg p-2">{/* 6 карточка */}
                <img className="w-16 h-16" src="./public/images/happy.svg" alt="" width={45} height={45}/>
                <h2 className=" text-2xl font-bold mb-4">Клиенты</h2>
                <h3 className=" text-xl  mb-4" >Самая лучшая награда для нас это положительные отзывы клиентов</h3>       
            </div> 
        </AnimatedCard>    
        </div> 
    </div> 
    
    
    
 );
}
