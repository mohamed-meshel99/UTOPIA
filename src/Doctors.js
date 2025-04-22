import React, { useState } from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import './Doctors.css';

const doctorsData = [
  {
    id: 1,
    name: 'د. أسامة أحمد مدبولي',
    specialty: 'خبير واستشاري في مجال الإعاقة والتربية الخاصة',
    image: '/اسامة.avif',
  },
  {
    id: 2,
    name: 'د. يوسف نوار',
    specialty: 'طبيب أسنان متخصص في علاج أصحاب القدرات الخاصة',
    image: '/يوسف نوارn_edited.avif',
  },
  {
    id: 3,
    name: 'كوتش محمد ماهر',
    specialty: 'مدرب حالات خاصة والمدرب العام لفريق ذوي الاحتياجات الخاصة في النادي الأهلي',
    image: '/محمد.avif',
  },
  {
    id: 4,
    name: 'د. محمد الفخراني',
    specialty: 'أخصائي تخاطب وعلاج سلوكي وخبير دولي معتمد',
    image: '/فخراني.avif',
  },
  {
    id: 5,
    name: 'د. بسنت',
    specialty: 'أخصائية علاج سلوكي وتأهيل',
    image: '/بسنت.avif',
  },
  {
    id: 6,
    name: 'د. شيماء',
    specialty: 'أخصائية تنمية مهارات',
    image: '/شيماء.avif',
  },
];

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({}); // حفظ حالة النجوم لكل طبيب
  const [views, setViews] = useState({}); // حفظ عدد المشاهدات لكل طبيب
  const [viewedDoctors, setViewedDoctors] = useState({}); // حفظ حالة العين لكل طبيب

  const toggleFavorite = (doctorId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [doctorId]: !prevFavorites[doctorId], // عكس الحالة عند الضغط
    }));
  };

  const incrementView = (doctorId) => {
    setViews((prevViews) => ({
      ...prevViews,
      [doctorId]: (prevViews[doctorId] || 0) + 1, // زيادة عدد المشاهدات
    }));
  };

  const toggleEye = (doctorId) => {
    // تغيير لون العين إلى الأسود عند الضغط عليها وزيادة عدد المشاهدات
    setViewedDoctors((prevViewedDoctors) => {
      const newViewedDoctors = { ...prevViewedDoctors };
      if (!newViewedDoctors[doctorId]) {
        newViewedDoctors[doctorId] = true;
        incrementView(doctorId); // زيادة المشاهدات عند الضغط
      }
      return newViewedDoctors;
    });
  };

  return (
    <div className="doctors-container">
      <h2 className="doctors-header">اختر طبيبك</h2>

      {/* Carousel */}
      <div className="carousel-container">

        <div className="doctors-grid">
          <div
            className="cardoctor-container"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`, // تحريك الصور بناءً على الفهرس
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {doctorsData.map((doctor) => (
              <div key={doctor.id} className="cardoctor">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                  onClick={() => incrementView(doctor.id)} // زيادة المشاهدات عند الضغط على الصورة
                />
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>


                <a
                  href="https://forms.gle/wnaD95aTSCfJUgDB9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button-89">حجز</button>
                </a>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Doctors;
