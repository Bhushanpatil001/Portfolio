import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const HeaderSocials = ({size}) => {

    return (
        <div className='home__socials' style={{display: "flex" , alignItems: "center", justifyContent : "center"}}>
            <a href='https://github.com/Bhushanpatil001' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub size={size}/>
            </a>

            <a href='https://www.linkedin.com/in/bhushanpatil017' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size={size} />
            </a>
        </div>
    );
};

export default HeaderSocials;
