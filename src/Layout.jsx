import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="main bg-[#222222] h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
