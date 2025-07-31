import React from 'react';
import './Skills.css';
import TailwindLogo from '../../assets/tailwindcss-mark.d52e9897.svg'
import Particles from '../Animated/Particles';
import ScrollAnimation from '../Animated/ScrollAnimation';

const skillsData = [
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        name: 'React.js'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        name: 'Next.js'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        name: 'Node.js'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        name: 'Express.js'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        name: 'MongoDB'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML5'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        name: 'CSS3'
    },
    {
        image: TailwindLogo,
        name: 'Tailwind CSS'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        name: 'SQL'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        name: 'Git'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        name: 'GitHub'
    },
    {
        image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        name: 'Postman'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        name: 'VS Code'
    }
];

const Skills = () => {
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

            {/* Foreground Content */}
            <section className="skills container section " id="skills" style={{ position: 'relative', zIndex: 1 }}>
                <ScrollAnimation animation="fadeInDown" delay={100} duration={0.8} triggerOnce={false}>
                    <h2 className="section__title">Technologies & Tools</h2>
                    <p className="skills__description">
                        Technologies I work with to build modern web applications
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={300} duration={0.8} triggerOnce={false}>
                    <div className="skills__marquee">
                    <div className="skills__track">
                        {/* First set of skills */}
                        {skillsData.map((skill, index) => (
                            <div key={index} className="skills__item">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="skills__image"
                                />
                                <span className="skills__name">{skill.name}</span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {skillsData.map((skill, index) => (
                            <div key={`duplicate-${index}`} className="skills__item">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="skills__image"
                                />
                                <span className="skills__name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    );
};

export default Skills;
