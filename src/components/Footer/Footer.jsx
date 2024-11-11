import "./Footer.scss";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h4>Feel free to contact me at any time.</h4>
          <div className="social-icons">
            <div className="contact-icon">
              <span>
                <IconMail width={30} height={30} />
              </span>
              <div className="contact-info">
                <div>Mail</div>
                <a href="mailto:dev.eduardo.fe@gmail.com">
                  dev.eduardo.fe@gmail.com
                </a>
              </div>
            </div>
            <div className="icon-group">
              <div className="contact-icon">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://linkedin.com/in/eddydevfe"
                >
                  <IconBrandLinkedin width={30} height={30} />
                </a>
              </div>
              <div className="contact-icon">
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/eddydevfe"
                >
                  <IconBrandGithub width={30} height={30} />
                </a>
              </div>
              <div className="contact-icon">
                <a
                  aria-label="discord"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/ZdzAVEGBkH"
                >
                  <IconBrandDiscord width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
