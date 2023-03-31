import React from 'react';

import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFoundPage';
import AboutUs from './pages/About us/AboutUs';
import { Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

/*const  App extends React.Component<{
  navigate: NavigateFunction;
  location: string;
}> {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Form" element={<FormPage />} />
        </Routes>
      </div>
    );
  }
}

export function AppWithRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return <App navigate={navigate} location={location.pathname} />;
}*/
export default App;
