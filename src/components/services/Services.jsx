import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/fullstack.svg'
import Particles from '../Animated/Particles'
import ScrollAnimation from '../Animated/ScrollAnimation'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Frontend Development",
        description:
            "Building responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks like Tailwind CSS",
    },
    {
        id: 2,
        image: Image2,
        title: "Backend Development",
        description:
            "Creating robust server-side applications with Node.js, Express.js, RESTful APIs, and database integration using MongoDB",
    },
    {
        id: 3,
        image: Image3,
        title: "Full-Stack Web Applications",
        description:
            "Developing complete MERN stack applications with secure authentication, real-time features, and scalable architecture",
    },
];

const Services = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: 'auto' }}>
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
            <section className="services container section" id="services" style={{ position: 'relative', zIndex: 1 }}>
                <ScrollAnimation animation="fadeInDown" delay={100} duration={0.8} triggerOnce={false}>
                    <h2 className="section__title">Services</h2>
                </ScrollAnimation>

                <div className="services__container grid">
                    {data.map(({ id, image, title, description }, index) => {
                        return (
                            <ScrollAnimation
                                key={id}
                                animation="fadeInUp"
                                delay={200 + (index * 150)}
                                duration={0.8}
                                triggerOnce={false}
                            >
                                <div className="services__card">
                                    <img src={image} alt='' className='services__img' width="80" />

                                    <h3 className="services__title">{title}</h3>
                                    <p className="services__description">{description}</p>
                                </div>
                            </ScrollAnimation>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Services