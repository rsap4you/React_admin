import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import store from './store';
import history from './history';
import Layouts from './layouts';
import { THEME_CONFIG } from './configs/AppConfig';
import mockServer from './mock';
import './lang';


const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  mockServer({ environment });
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint="styles-insertion-point"
          >
            <Routes>
             
            </Routes>
            <Layouts />
          </ThemeSwitcherProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
