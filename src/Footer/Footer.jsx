import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1 info">
              <h3>
                <span>SponsorNet</span>
              </h3>
              <p>
                SponsorNet is a centralized platform that aims to bring Event Organizer and 
                Event Sponsors ( Company / StartUps ) and reduce the communication Barrier 
                Between them.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2 quick_link">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="a" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="a" href="/">
                    Main
                  </a>
                </li>
                <li className="nav-item">
                  <a className="a" href="/">
                    Event
                  </a>
                </li>
                <li className="nav-item">
                  <a className="a" href="/">
                    Apply
                  </a>
                </li>
                <li className="nav-item">
                  <a className="a" href="/">
                   Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3 quick">
              <h5>Quick Links</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +92 3121324083
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> sponsornet123@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Pune, India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Design By Team SponsorNet</p>
      </div>
    </>
  );
}

export default Footer;