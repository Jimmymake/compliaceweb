import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUpPage/SignUpPage";
import SignIn from "./SignInPage/SignInPage";
import UserMainpage from "./UserMainPage/UserMainPage";
import NotFound from "./NotFound/NotFound";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "./Home/Home";
import FormTab from "./FormTab/FormTab";
import Messages from "./Messages/Messages";
import AdminDashboard from "./ADMIN/AdminMainPage/AdminMainPage";
import Test from './test';
import DataGrid from './ADMIN/DataGrid/DataGrid';

function App() {
  return (
    <div>
   
      {/* <Test></Test> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/SignIn" replace />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
         <Route
            path="/AdminDashboard/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="DataGrid" element={<DataGrid />} />
            <Route path="Form" element={<FormTab />} />
            <Route path="Chart" element={<Messages />} />
            <Route index element={<DataGrid />} />
          </Route>


          <Route
            path="/UserDashboard/*"
            element={
              <ProtectedRoute>
                <UserMainpage />
              </ProtectedRoute>
            }
          >
            {/* <Route path="Home" element={<Home />} /> */}
            <Route path="Form" element={<FormTab />} />
            <Route path="Chart" element={<Messages />} />
            <Route index element={<FormTab />} />
          </Route>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
