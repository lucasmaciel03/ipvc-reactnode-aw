import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-footer">
        <div className="top-footer">
          <div className="text-footer">
            <h3>Be the first to receive new releases!</h3>
          </div>
          <div className="input-footer">
            <input
              id="footerEmail"
              type="email"
              placeholder="Your email"
            ></input>
            <button for="footerEmail" type="button">
              Send
            </button>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="rights-footer">
            <p>© 2022 All rights reserved</p>
          </div>
          <div className="social-foooter">
            <button>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                Facebook
              </a>
            </button>
            <button>
              <a
                rel="noreferrer"
                href="https://www.twitter.com"
                target="_blank"
              >
                Twitter
              </a>
            </button>
            <button>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
