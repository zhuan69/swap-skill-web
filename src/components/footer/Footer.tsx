import React from 'react';
import "../footer/footer.css";
import linkedinIcon from '../image/linkedin.png';
import instagramIcon from '../image/ig.png';
// import useFooter from "../../hooks/useFooter";

const Footer = () => {
  // const { adreess, contactUs } = useFooter();

  return (
    <div className="footer" style={{ marginTop: 0, paddingTop: '20px', backgroundColor: '#3699a0', color: '#ffffff' }}>
      <div className="footer-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

        <div className="footer-section" style={{ flex: '1', padding: '0 20px', textAlign: 'center' }}>
          <a href="/home">
            <img src="jembatan_ilmu.png" width="200" height="150" alt="logo" />
          </a>
        </div>

        <div className="footer-section" style={{ flex: '1', marginTop: 40, padding: '0 20px' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', color: '#ffffff' }}>Contact Us</h4>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>Email: <a href="mailto:milkamil@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}><u>ridwankamil@gmail.com</u></a></p>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>Website: <a href="http://www.jembatanilmu.com" style={{ color: '#ffffff', textDecoration: 'none' }}><u>www.jembatanilmu.com</u></a></p>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>Phone: <a href="tel:+628137112453" style={{ color: '#ffffff', textDecoration: 'none' }}><u>+6281236134</u></a></p>
        </div>

        <div className="footer-section" style={{ flex: '1', marginTop: 40, padding: '0 20px' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', color: '#ffffff' }}>Address</h4>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>Jl. Karyawan 4, Karang Tengah, Kec. Karang Tengah </p>
          <p style={{ fontSize: '16px' }}>Kota Tangerang, Banten 15157</p>
        </div>

        <div className="footer-section" style={{ flex: '1', marginTop: 40, padding: '0 20px', textAlign: 'center' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px', color: '#ffffff' }}>Follow Us</h4>
          <div className="social-media" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://www.instagram.com/konselingsatir/">
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedinIcon} alt="Linkedin" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{ textAlign: 'center', padding: '10px 0px 20px 0px', marginTop: '40px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#ffffff' }}><b>Copyright © 2023 Ridwan Kamil</b></p>
      </div>
    </div>



  );
};

export default Footer;
