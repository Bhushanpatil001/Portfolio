import React from 'react';
import './About.css';
import Image from '../../assets/me2.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import Particles from '../Animated/Particles';
import ScrollAnimation from '../Animated/ScrollAnimation';

const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    };

    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '600px' }}>
            {/* Background Particles Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <Particles
                    particleColors={['#FBFF00', '#FBFF00']}
                    particleCount={700}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Foreground About Section */}
            <section 
                className="about container section" 
                id="about" 
                style={{ position: 'relative', zIndex: 1 }}
            >
                <ScrollAnimation animation="fadeInDown" delay={100} duration={0.8} triggerOnce={false}>
                    <h2 className="section__title">About Me</h2>
                </ScrollAnimation>

                <div className="about__container grid">
                    <ScrollAnimation animation="fadeInLeft" delay={200} duration={0.8} triggerOnce={false}>
                        <img src={Image} alt="" className="about__img" style={{ borderRadius: '50%' }} />
                    </ScrollAnimation>

                    <div className="about__data grid">
                        <div className="about__info">
                            <p className="about__description">
                                Hello! I'm Bhushan, and I'm based in Surat, India. I’ve completed my Bachelor of Computer Applications from Bhagwan Mahavir University with an 8.5+ CGPA and ranked among the top 3% of my batch.
                                Fast forward to today, I'm a Junior MERN Stack Engineer with 9+ months of experience building scalable full-stack web applications.
                                My current focus is on expanding my expertise in modern web technologies and contributing to innovative projects that make a real impact.
                                <br /><br />
                                Here are a few technologies I’ve been working with recently:
                            </p>
                            <ul className="about__list">
                                <li>JavaScript (ES6+)</li>
                                <li>React.js & Next.js</li>
                                <li>Node.js & Express.js</li>
                                <li>MongoDB & SQL</li>
                                <li>RESTful APIs</li>
                                <li>Tailwind CSS</li>
                            </ul>
                            <button className="btn" onClick={downloadResume}>Download CV</button>
                        </div>
                    </div>
                </div>

                <AboutBox />
            </section>
        </div>
    );
};

export default About;
