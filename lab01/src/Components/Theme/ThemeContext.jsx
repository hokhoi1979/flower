import React, { useState, useEffect } from 'react';

const themes = {
  dark: {
    backgroundColor: "black",
    color: "rgb(216, 216, 216)",
  },
  light: {
    backgroundColor: "rgb(216, 216, 216)",
    color: "black",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}, // hàm nãy sẽ chuyển đổi giữa các chủ đề
};

const ThemeContext = React.createContext(initialState); // tạo giá trị mặc định là object initialState, khi k có provider bao bọc thì gtri này sẽ được lấy

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);


  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, []);


  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
