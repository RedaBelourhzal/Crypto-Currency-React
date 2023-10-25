import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

function MasterPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container my-5">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MasterPage;
