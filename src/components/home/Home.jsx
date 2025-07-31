import React from "react";
import "./Home.css";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
// import DotGrid from "../Animated/DotGrid";
import Particles from "../Animated/Particles";
import BlurText from "../Animated/BlurText";
import ScrollAnimation from "../Animated/ScrollAnimation";
const Home = () => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "800px" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          {/* <DotGrid
            dotSize={3}
            gap={17}
            baseColor="#212020"
            activeColor="#FFD700"
            proximity={220}
            shockRadius={380}
            shockStrength={5}
            resistance={300}
            returnDuration={2}
          /> */}
          <Particles
            particleColors={["#FBFF00", "#FBFF00"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Foreground Content */}
        <section
          className="home container"
          id="home"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="intro">
            <ScrollAnimation animation="scaleIn" delay={200} duration={1} triggerOnce={false}>
              <img
                src={Me}
                alt=""
                className="home__img"
                width="300"
                style={{ borderRadius: "50%" }}
              />
            </ScrollAnimation>

            <BlurText
                text="Bhushan Patil"
                delay={150}
                animateBy="words"
                direction="top"
                className="Name center"
            />
            <BlurText
                text=" I'm a Junior MERN Stack Engineer"
                delay={250}
                animateBy="words"
                direction="top"
                className="text-xl center"
            />
            {/* <h1 className="home__name">Bhushan Patil</h1> */}
            {/* <h3 className="home__education">
              I'm a Junior MERN Stack Engineer
            </h3> */}

            <ScrollAnimation animation="fadeInUp" delay={600} duration={0.8} triggerOnce={false}>
              <HeaderSocials size={36} />
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={800} duration={0.8} triggerOnce={false}>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInDown" delay={1000} duration={0.8} triggerOnce={false}>
              <div className="scroll__down">
                <ScrollDown />
              </div>
            </ScrollAnimation>
          </div>

          <Shapes />
        </section>
      </div>
    </>
  );
};

export default Home;
