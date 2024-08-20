import React from 'react';
import Footer from "../components/footer/Footer";
// import GlobalBanner from "../components/banner/banner-v2/GlobalBanner";
import NewNavbar from "../components/navbar/Navbar";

type props = {
  bgImage: string;
  children: React.ReactNode;
  accountEmail?: string;
  firstElement: React.ReactNode;
  secondElement: React.ReactNode;
};

const LayoutWithBanner = ({
  children,
}: props) => {
  return (
    <div className="mx-auto max-w-[1710px]">
      <NewNavbar />
      {/* <GlobalBanner
        bgImage={bgImage}
        firstElement={firstElement}
        secondElement={secondElement}
      /> */}
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWithBanner;
