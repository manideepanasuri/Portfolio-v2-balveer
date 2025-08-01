import { Container } from "./styles";
import Balveer from "../../assets/balveer1.jpg";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
//import tailwind from "../../assets/tailwind.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import wordpress from "../../assets/wordpress.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I'm Patel Balveer, a B.Tech Computer Science & Engineering student at CMR Engineering College with a passion for digital marketing, resume building, and programming.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I specialize in crafting effective marketing strategies and have hands-on experience with Python, Java, HTML, and CSS. Certified in digital marketing and resume building.
          </p>
        </ScrollAnimation>
        {/*<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>*/}
        {/*  <p>*/}
        {/*    I also work with CMS platforms like WordPress and Shopify to streamline content management.*/}
        {/*  </p>*/}
        {/*</ScrollAnimation>*/}
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <div style={{ padding: "1rem" }}>
              <h4>Bachelors in Computer Science</h4>
              <p>CMR Institute Of Technology, Hyderabad, Third-year</p>
            </div>

          </div>
        </ScrollAnimation>
        {/*<ScrollAnimation animateIn="fadeInLeft" delay={550}>*/}
        {/*  <div className="experience">*/}
        {/*     <h3>Experience:</h3><h4>Software Developer</h4>*/}
        {/*    <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>*/}
        {/*    <p>Bangalore, India</p>*/}
        {/*  </div>*/}
        {/*</ScrollAnimation>*/}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={nodeIcon} alt="Node JS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={shopify} alt="Django" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={wordpress} alt="tailwind" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img style={{borderRadius:10}} src={Balveer} alt="Balveer" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
