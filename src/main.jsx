import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  About,
  Contact,
  Dashboard,
  DiaryDashboard,
  Documentation,
  Home,
  PageDashboard,
  PersonDashboard,
  ProfileDashboard,
  SignIn,
  SignUp,
  WelcomeDashboard,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="documentation" element={<Documentation />} />
      <Route path="contact" element={<Contact />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="dashboard/" element={<Dashboard />}>
        <Route path="" element={<WelcomeDashboard />} />
        <Route path="diary" element={<DiaryDashboard />} />
        <Route path="page" element={<PageDashboard />} />
        <Route path="person" element={<PersonDashboard />} />
        <Route path="profile" element={<ProfileDashboard />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
