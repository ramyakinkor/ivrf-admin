import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { environments } from "./hooks/environments";
import { useDispatch } from "react-redux";
import { getProfile } from "./store/reducers/AdminSlice";
import { getAllImages, getAllVideos, getProductCategories } from "./store/reducers/ProductSlice";
import { routes } from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [])
  return (
    <React.StrictMode >
    {/* base name here is required to use in different url */}
    <Router basename={environments.subdomain}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          {routes.map(route => <Route path={route.url} element={<route.component/>} />)}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
  )
}

export default App;