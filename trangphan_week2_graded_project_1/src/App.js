import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Dashboard from './components/Dashboard/dashboard';
import {
  Routes,
  Route,
} from "react-router-dom";
import DashboardDetail from './components/Dashboard/dashboardDetail';
// import Login from './components/login';

function App() {
  return (
    <div className="App">

     <Header></Header>
     <Routes>
      <Route path = "/" element={<Dashboard></Dashboard>}/>
      <Route path = "/dashboard/:id" element={<DashboardDetail />}/>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
     {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
