// 예제 6: useContext를 사용한 전역 상태 관리 , useContext를 사용하면 부모-자식 구조에서 상태를 props 없이 전달할 수 있어 여러 컴포넌트에서 동일한 데이터를 쉽게 공유할 수 있습니다.
import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // ThemeContext를 생성하여 theme 상태와 toggleTheme 함수를 공유합니다.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ThemeToggleButton 컴포넌트는 useContext로 ThemeContext 값을 가져와 버튼을 클릭하면 테마를 전환합니다.
function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
    </ThemeProvider>
  );
}

export default App;