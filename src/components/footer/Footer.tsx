import React from 'react';
import "../footer/footer.css";
// import useFooter from "../../hooks/useFooter";

const Footer = () => {
  // const { adreess, contactUs } = useFooter();

  return (
    <div className="footer" style={{ marginTop: 0 }}>
      <div className="sb__footer">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
              Hall of Collaborator
            </h4>
            <a href="https://salt.id/academy">
              <div className="logo">
                <p>
                  <img src="/images/salt.webp" alt="" />
                </p>
              </div>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="contact-us">
              <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Contact Us
              </h4>
              {(
                <>
                  <p>
                    { }teasd{" "}
                    <span className="font-bold">
                      { }test1{" "}
                    </span>{" "}
                  </p>
                  <p>
                    { }test{" "}
                    <span className="font-bold">
                      { }
                    </span>
                  </p>
                  <p>
                    Phone{" "}
                    <span className="font-bold">
                      { }
                    </span>{" "}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="sb__footer-links_div">
            <div className="addres">
              <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>Address</h4>
              {(
                <>
                  <p>test</p>
                  <p className="font-bold">test</p>
                </>
              )}
            </div>
          </div>
          <div className="sb__footer-links_div">
            <h4 style={{ fontWeight: "bold", fontSize: "13px" }}>
              Social media bawahnya
            </h4>
            <div className="socialmedia">
              <a href="https://www.facebook.com/konselingsatir.id/">
                <img src="/images/fb.webp" alt="" />
              </a>
              <p>
                <img src="./images/ig.webp" alt="" />
              </p>
            </div>
          </div>
        </div>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>Copyright © 2023 Ridwan Kamil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
