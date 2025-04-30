// src/Serve.js
import React, { useState, useEffect } from 'react';
import './Serve.css'; // هذا الملف يحتوي على التنسيق

const cardsData = [
  {
    id: 1,
    image: '/serve/chat.jpg',
    text: 'Card 1 Text',
    bgColor: '#6a0dad',  // بربل
    title: 'الشات',
    description: 'هنا يمكنك التحدث مع الأطباء والمستخدمين الآخرين من خلال الرسائل النصية أو الصوتية.',
    smallImages: ['/animate/chat1.gif', '/animate/chat2.gif'],  // صور صغيرة على الجانبين
    buttonText:"] ابدأ الدردشة",  // نص الزر
    buttonClass: 'bubbly-button', // الكلاس الخاص بزر البابلين
    buttonLink: "https://club.utopiaworld.site"

  },
  {
    id: 2,
    image: '/serve/games.PNG',
    text: 'Card 2 Text',
    bgColor: '#800000',  // نبيتي
    title: 'الألعاب',
    description: 'خدمة الألعاب التي تساعد الأطفال على تعلم مهارات جديدة من خلال اللعب التفاعلي.',
    smallImages: ['/animate/games1.gif', '/animate/games2.gif'],  // صور صغيرة على الجانبين
    buttonText: 'ابدأ اللعبة',  // نص الزر
    buttonClass: 'game-button',// الكلاس الخاص بالزر الثاني
    buttonLink: "http://game-over.utopiaworld.site/"
  },
  {
    id: 3,
    image: '/serve/edu.PNG',
    text: 'Card 3 Text',
    bgColor: '#bfefff',  // بيبي بلو
    title: 'التعليم',
    description: 'من خلال هذه الخدمة، يمكن للأطفال تعلم معلومات جديدة بطريقة مرحة ومشوقة.',
    smallImages: ['/animate/edu1.gif', '/animate/edu2.gif'],  // صور صغيرة على الجانبين
    buttonText: 'ابدأ التعلم',  // نص الزر
    buttonClass: 'blob-btn' ,// الكلاس الخاص بالزر الأخير
    buttonLink: "http://down-up.utopiaworld.site/"

  },
  // أضف المزيد من الكروت هنا حسب الحاجة
];

function Serve() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState(''); // إضافة الحالة لتغيير الخلفية
  const [cardBackgroundColor, setCardBackgroundColor] = useState(''); // إضافة الحالة لتغيير الخلفية الخاصة بالكارد

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardIndex = Math.floor(scrollPosition / window.innerHeight);

    // تحديد الكارد الذي تم الوصول إليه
    if (cardsData[cardIndex]) {
      setBackgroundImage(cardsData[cardIndex].image); // تحديد الصورة الخاصة بكل كارد
      // تغيير خلفية الـ body بناءً على الكارد
      if (cardIndex === 0) {
        setBodyBackgroundColor('#b066e5'); // بربل
        setCardBackgroundColor('#7c40a7'); // بربل
      } else if (cardIndex === 1) {
        setBodyBackgroundColor('#bb1a1a'); // نبيتي
        setCardBackgroundColor('#140707'); // نبيتي
      } else if (cardIndex === 2) {
        setBodyBackgroundColor('#bfefff'); // بيبي بلو
        setCardBackgroundColor('#42707f'); // بيبي بلو
      }
    }
  };

  useEffect(() => {
    // تخصيص خصائص body عندما نكون في صفحة "خدماتنا"
    document.body.style.backgroundColor = bodyBackgroundColor; // تغيير خلفية الـ body
    document.body.style.margin = '0'; // إزالة الهوامش الافتراضية
    document.body.style.fontFamily = 'Arial, sans-serif'; // تخصيص الخط
    document.body.style.overflowX = 'hidden'; // إخفاء التمرير الأفقي

    // التنظيف عند الخروج من الصفحة
    return () => {
      document.body.style.backgroundColor = ''; // إعادة الخلفية الافتراضية
      document.body.style.margin = ''; // إعادة الهوامش الافتراضية
      document.body.style.fontFamily = ''; // إعادة الخط الافتراضي
      document.body.style.overflowX = ''; // إعادة التمرير الافتراضي
    };
  }, [bodyBackgroundColor]); // إعادة تنسيق الـ body عند تغيير الخلفية

  useEffect(() => {
    // إضافة مستمع للتمرير
    window.addEventListener('scroll', handleScroll);

    // إزالة مستمع التمرير عند الخروج
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="serve">
      <h1 style={{ color: 'black' }}>خدماتنا</h1>
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundColor: cardBackgroundColor }}
        >
          <div className="card-image-wrapper">
            <img src={card.image} alt={`Card ${card.id}`} className="card-image" />
          </div>
          <div className="card-content">
            <p className="card-title">{card.title}</p>
            <p className="card-description">{card.description}</p>
            {/* إضافة الزر الخاص بكل كارد */}
            <a
              href={card.buttonLink}
              className={`card-button ${card.buttonClass}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}
            >
              {card.buttonText}
            </a>
          </div>
          {/* إضافة الصور الصغيرة على الجانبين */}
          <div className="small-images">
            <img src={card.smallImages[0]} alt="Left Small" className="small-image left" />
            <img src={card.smallImages[1]} alt="Right Small" className="small-image right" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Serve;
