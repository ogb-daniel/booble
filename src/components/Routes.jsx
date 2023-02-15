import React from "react";
import {
  Routes as MyRoutes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Results } from "./Results";
export const Routes = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <MyRoutes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/images" element={<Results />} />
      </MyRoutes>
    </div>
  );
};
