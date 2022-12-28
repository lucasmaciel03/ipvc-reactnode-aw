import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-footer">
        <div className="top-footer">
          <div className="text-footer">
            <h3>
              <span>MovieAL </span> rent your favorite movies
            </h3>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="social-foooter">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="fa fa-facebook"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="fa fa-twitter"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="fa fa-linkedin"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
