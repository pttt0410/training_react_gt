# Class component vs Functional Component
1. initinal use of Class Component
2. 

## Routing in the React

1. add react-router-dom by installing npm install react-router-dom

2. index.js import { BrowserRouter } from 'react-router-dom';
    <BrowserRouter>
    <App />
    </BrowserRouter>
3. App.js
    import {
  Routes,
  Route,
} from "react-router-dom";

 <Routes>
      <Route path = "/" element={<Dashboard></Dashboard>}/>
      {/* <Route path = "/dashboard/:username" element={<Dashboard></Dashboard>}/> */}
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>