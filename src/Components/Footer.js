import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="company-name">picShop</div>
        <div className="company-desc">
          PicShop is a online photoshop website,that develops the PicShop suite
          of online photo editing applications, with a social creative
          community. The platform allows users to take and edit pictures and
          videos, draw with layers, and share the images on Picsart and other
          social networks.
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-right">
        <div className="contact-us">Contact Us</div>
        <div className="social">
          <img
            alt="facebook"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
          />
          <img
            alt="twitter"
            src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png"
          />
          <img
            alt="instagram"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
          />
          <img
            alt="youtube"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png"
          />
          <img
            alt="linkedin"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
