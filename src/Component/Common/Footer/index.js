import React from "react";
// import "./styles.css";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer flex justify-between p-8 text-[var(--black)] bg-[var(--white)]">
      <p className="logo text-xl font-bold " onClick={() => topFunction()}>
        CryptoTracker<span className="text-[var(--blue)]">.</span>
      </p>

      <p className="text-xl font-semibold">Made By Sankalp❤️</p>

      <div className="social-links flex gap-8">
        <a href="https://github.com/sankalp130">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:gsankalp587@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/gsankalp587?t=dh40tCsQT-6P-F73pBCP_g&s=08">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/sankalp130/">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;