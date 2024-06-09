import React from "react";
import NewNavbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

type props = {
  children?: React.ReactNode;
};

const GlobalLayout = (props:props) => {
  const{children}=props
  return (
    <div className="mx-auto max-w-[1710px]">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
