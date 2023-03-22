import React from 'react';

import './App.css';
import Home from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFoundPage';
import { AboutUs } from './pages/About us/AboutUs';
import Header from './components/Header/HeaderComponent';
import { NavigateFunction, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
class App extends React.Component<{
  navigate: NavigateFunction;
  location: string;
}> {
  render() {
    return (
      <div className="App">
        <Header navigate={this.props.navigate} location={this.props.location} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}
export function AppWithRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return <App navigate={navigate} location={location.pathname} />;
}
export default App;
