import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Mahmoud AbuEllil</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/abu-ellil-806619254/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Abu-ellil">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/MahmoudAboelli3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
