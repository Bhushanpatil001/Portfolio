import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import Particles from '../Animated/Particles';

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
            <section className="resume container section" id="resume" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section__title">Experience</h2>

                <div className="resume__container">
                    <Tabs
                        className="tabs"
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                        selectedTabClassName={"is-active"}
                        selectedTabPanelClassName={"is-active"}
                    >
                        <TabList className="tab__list">
                            {WorkExperience.map((experience, index) => {
                                const { id, company } = experience;
                                return (
                                    <Tab className="tab" key={`company-${id}`}>
                                        <Button>{company}</Button>
                                    </Tab>
                                );
                            })}
                        </TabList>

                        {WorkExperience.map((experience) => {
                            const { id, company, yearsActive, title, information } = experience;
                            return (
                                <TabPanel className="tab__panel" key={`panel-${id}`}>
                                    <h2 className="tab__panel-title">
                                        {title} @ {company}
                                    </h2>
                                    <p className="tab__panel-subtitle">{yearsActive}</p>
                                    <ul className="tab__panel-list">
                                        {information.map((info, index) => {
                                            return <li key={`info-${index}`}>{info}</li>;
                                        })}
                                    </ul>
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

export default Resume;
