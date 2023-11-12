import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", paddingTop: "3.1rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
