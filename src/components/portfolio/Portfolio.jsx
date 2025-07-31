import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import Particles from '../Animated/Particles';
import ScrollAnimation from '../Animated/ScrollAnimation';

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

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
			<section className="portfolio container section" id="portfolio" style={{ position: 'relative', zIndex: 1 }}>
				<ScrollAnimation animation="fadeInDown" delay={100} duration={0.8} triggerOnce={false}>
					<h2 className="section__title">Recent Projects</h2>
				</ScrollAnimation>

				<ScrollAnimation animation="fadeInUp" delay={200} duration={0.8} triggerOnce={false}>
					<div className="portfolio__filters">
					<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
						All
					</span>
					<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Frontend"); setActiveFilter(1) }}>
						Frontend
					</span>
					<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Backend"); setActiveFilter(2) }}>
						Backend
					</span>
					<span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Angular"); setActiveFilter(3) }}>
						Angular
					</span>
					<span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("React"); setActiveFilter(4) }}>
						React
					</span>
				</div>
				</ScrollAnimation>

				<div className="portfolio__container grid">
					{items.map((elem) => {
						const { id, image, title, category, url, repositoryUrl } = elem;

						return (
							<motion.div
								layout
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.6 }}
								className="portfolio__card"
								key={id}>
								<div className="portfolio__thumbnail">
									<img src={image} alt="" className="portfolio__img" style={{objectFit: "cover", position: "absolute", height: "100%", width: "100%"}} />
									<div className="portfolio__mask"></div>
								</div>

								<span className="portfolio__category">{category.join(', ')}</span>
								<h3 className="portfolio__title">{title}</h3>
								<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
									<RiLink className="portfolio__button-icon" />
								</a>
								<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
									<RiGithubLine className="portfolio__button-icon" />
								</a>
							</motion.div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Portfolio;
