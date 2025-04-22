import React from "react";
import "./Travels.css";

const Travels = () => {
  const trips = [
    { id: 1, title: "رحلة لنكتشف العالم", link: "https://docs.google.com/forms/d/e/1FAIpQLSezZggeCWw52yx2s0sjThesqRj395-46sv0QJALelTGNv0tPg/viewform?usp=sf_link" },
    { id: 7, title: "تطوع", link: "https://forms.gle/eJXZbxVsLnmCUwaA6" },
  ];

  return (
    <div className="travels-container">
      {/* الصور في الأعلى */}
      <center>
      <h2 className="h1">بعض من الرحلات الترفيهية</h2>
      <h3>استكشف الجزء الترفيهي الخاص بنا في عالم الحب</h3>
      </center>
      <div className="header-images">
        <img src="earth.jpg" alt="رحلة 1" className="header-img" />
        <img src="bus.jpg" alt="رحلة 2" className="header-img" />
      </div>

      {/* الكور والأسهم */}
      <div className="timeline-container">
        {trips.map((trip, index) => (
          <React.Fragment key={trip.id}>
            <div
              className="timeline-item clickable"
              onClick={() => window.open(trip.link, "_blank")}
            >
              <div className="circle">
                <p className="trip-title">{trip.title}</p>
              </div>
            </div>
            {index < trips.length - 1 && <div className="arrow"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Travels;
