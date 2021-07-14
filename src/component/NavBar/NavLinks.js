import React from 'react'
import {motion} from 'framer-motion'

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return(
        <ul>
            <motion.li 
            onClick={() => props.isMobile && props.closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transriion={{delay: 0.05}}
            >
                <a href='/#home'>Home</a>
            </motion.li>
            
            <motion.li 
            onClick={() => props.isMobile && props.closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition= {{delay: 0.10}}
            >
                <a href='/#about'>About Me</a>
            </motion.li>
            
            <motion.li 
            onClick={() => props.isMobile && props.closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition= {{delay: 0.20}}
            >
                <a href='/#skills'>Skill</a>
            </motion.li>

            <motion.li 
            onClick={() => props.isMobile && props.closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition= {{delay: 0.30}}
            >
                <a href='/#work'>Work</a>
            </motion.li>
           
            <motion.li 
            onClick={() => props.isMobile && props.closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition= {{delay: 0.40}}
            >
                <a href='/#contact'>Contact</a>
            </motion.li>
        </ul>
    )
}

export default NavLinks