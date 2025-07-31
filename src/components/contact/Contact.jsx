import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import Particles from '../Animated/Particles';
import ScrollAnimation from '../Animated/ScrollAnimation';

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Please complete the form above");
        }

        setLoading(true);

        const data = {
            name,
            email,
            subject,
            message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                data,
                process.env.REACT_APP_EMAILJS_PUBLIC_API
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Successfully sent email.`);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(error.text);
                }
            );
    };

    return (
        <div style={{ position: 'relative', width: '100%', minHeight: 'auto' }}>
            {/* Background Particles Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '93%',
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
            <section className="contact container section" id="contact" style={{ position: 'relative', zIndex: 1 }}>
                <ScrollAnimation animation="fadeInDown" delay={100} duration={0.8} triggerOnce={false}>
                    <h2 className="section__title">Get In Touch</h2>
                </ScrollAnimation>

                <div className="contact__container grid">
                    <ScrollAnimation animation="fadeInLeft" delay={200} duration={0.8} triggerOnce={false}>
                        <div className="contact__info">
                            <h3 className="contact__title">Let's talk about everything!</h3>
                            <p className="contact__details">
                                Don't like forms? Send me an email. 👋
                            </p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInRight" delay={400} duration={0.8} triggerOnce={false}>
                        <form onSubmit={submitHandler} className="contact__form">
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input
                                    type="text"
                                    className="contact__form-input"
                                    placeholder="Insert your name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="contact__form-div">
                                <input
                                    type="email"
                                    className="contact__form-input"
                                    placeholder="Insert your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Insert your subject"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write your message"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn">
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                    </ScrollAnimation>
                    <ToastContainer position="bottom-right" theme={props.theme || "dark"} />
                </div>
            </section>
        </div>
    );
};

export default Contact;
