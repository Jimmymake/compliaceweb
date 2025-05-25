import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  if (!token) {
    // Not logged in, redirect to sign in
    return <Navigate to="/SignIn" replace />;
  }
  // Logged in, render the children (dashboard)
  return <>{children}</>;
}