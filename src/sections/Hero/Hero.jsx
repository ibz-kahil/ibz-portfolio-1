import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avatar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ibrahim Kahil"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ibrahim
          <br />
          Kahil
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ibz-kahil" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-kahil/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion fro developing modern React web apps for commerical
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
