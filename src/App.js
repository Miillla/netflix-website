import "./app.scss";
import React from "react";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Register />} /> */}
        <Route path="watch" element={<Watch />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />

        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;

const Layout = () => {
  let location = useLocation();
  let from = location.pathname || null;
  console.log(location.pathname);
  return <>{from ? <Outlet /> : <Login />}</>;
};
