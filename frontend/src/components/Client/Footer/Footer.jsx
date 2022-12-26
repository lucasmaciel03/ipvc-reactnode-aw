import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-footer">
        <div className="top-footer">
          <div className="text-footer">
            <h3>
              <span>Be the first to</span> receive new releases!
            </h3>
          </div>
          <div className="input-footer">
            <form>
              <input
                id="footerEmail"
                type="email"
                placeholder="Your email"
              ></input>
              <button type="submit" htmlFor="footerEmail">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="rights-footer">
            <p>© 2022 All rights reserved</p>
          </div>
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