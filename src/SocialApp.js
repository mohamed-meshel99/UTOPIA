import React, { useState } from 'react';
import './SocialApp.css';
import Doctors from './Doctors';
import Blog from './Blog';
import Travels from './Travels';
import Serve from './Serve';
const SocialApp = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app-container">
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li onClick={() => setCurrentPage("home")}>الصفحة الرئيسية</li>
            <li onClick={() => setCurrentPage("serve")}>خدماتنا</li>
            <li onClick={() => setCurrentPage("blog")}>المدونة</li>
            <li onClick={() => setCurrentPage("doctors")}>الأطباء</li>
            <li onClick={() => setCurrentPage("travels")}>الرحلات</li>
          </ul>
        </aside>

        {currentPage === "home" && (
          <main>
            <section className="welcome">
              <header>
                <div className="overlay">
                  <h1>utopia</h1>
                  <h2><span>♡</span>الجانب الألطف من العالم</h2>
                  <img src="/birds.gif" alt="Animated birds GIF" className="animated-gif" />
                </div>
              </header>
            </section>

            <br /><br /><br /><br />
            <section className="about">
              <h3 className="ritl">
                <span>من نحن؟؟</span><br />
                نحن في عالم الحب (utopia) نقدم لكم الجانب الألطف والأكثر صداقة وودًا في العالم.
                <br /><br />
                utopia هو عالم يجمعنا بجميع أصحاب القدرات الخاصة لنتعرف بهم عن قرب
                ونستكشف هذا العالم الملئ بالأصدقاء الرائعين ويهدف إلى تقديم جميع الخدمات
                التي يحتاجونها بشكل أسهل ومجمع في مكان واحد لتسهيل الحياة لهم وخلق عالم أفضل.
              </h3>
            </section>

            <br /><br />
            <section className="services">
              <center>
                <span>استكشف معنا عالمنا وخدماته وهيا بنا نتقرب إلى هذا العالم</span> <br />
                <img src="/servic.gif" alt="Animated astro boy GIF" className="animated-gif" /> <br />
                <button onClick={() => setCurrentPage("services")}>استكشف خدماتنا</button>  
              </center>
            </section>
          </main>
        )}

        {currentPage === "doctors" && (
          <>
            <Doctors />
          </>
        )}
        {currentPage === "serve" &&(
          <>
          <Serve />
          </>
        )}
        
        {currentPage === "blog" && (
          <>
            <Blog />
          </>
        )}

        {currentPage === "travels" && (
          <>
            <Travels />
          </>
        )}
      </div>
    </div>
  );
};

export default SocialApp;


