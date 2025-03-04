import React, { createContext, useState } from "react";

// إنشاء السياق
export const Context = createContext();

// المكوّن الموفر للسياق
export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar"); // اللغة الافتراضية هي العربية

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ar" ? "en" : "ar"));
  };

  return (
    <Context.Provider value={{ language, toggleLanguage }}>
      {children}
    </Context.Provider>
  );
};
