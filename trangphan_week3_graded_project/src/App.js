import './App.css';
import Header from './components/Header/header';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import DashboardDetail from './components/Dashboard/dashboardDetail';
import LoginComponent from './components/Login/login';
import RegisterComponent from './components/Register/register';
import { useEffect, useState } from 'react';
import AuthContext from './context/AuthContext';

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});

  const handleLogin = (user) => {
    setAuth(user);
    navigate('/')
  }

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (local) {
      setAuth(local); 
      navigate('/dashboard/1');
    } else {
      const currentUrl = window.location.pathname.replace('/', '');
      if (currentUrl !== 'login' && currentUrl !== 'register') {
        navigate('/login');
      }
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user: auth, login: handleLogin }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<DashboardDetail />} />
          <Route path="/dashboard/:id" element={<DashboardDetail />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="login" element={<LoginComponent />} />
          <Route path='register' element={<RegisterComponent />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
