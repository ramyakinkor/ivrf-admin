import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PhotoUpload from "./pages/Uploads/Photo/PhotoUpload";
import UploadVideo from "./pages/Uploads/Video/UploadVideo";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import AllPhotos from "./pages/All/Photos/AllPhotos";
import AllVideos from "./pages/All/Videos/AllVideos";
import User from "./pages/Users/User";
import Settings from "./pages/settings/Settings";
import EditVideo from "./pages/Edit/Video/EditVideo";
import EditPhoto from "./pages/Edit/Photo/EditPhoto";
import ViewReceipt from "./pages/ViewReceipt/ViewReceipt";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<PhotoUpload />} />
          <Route path="upload-video" element={<UploadVideo />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="all-photos" element={<AllPhotos />} />
          <Route path="all-videos" element={<AllVideos />} />
          <Route path="users" element={<User />} />
          <Route path="settings" element={<Settings />} />
          <Route path="edit-video" element={<EditVideo />} />
          <Route path="edit-photo" element={<EditPhoto />} />
          <Route path="view-receipt" element={<ViewReceipt />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
