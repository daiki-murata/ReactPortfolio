import React from 'react'
import classes from './Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {motion} from 'framer-motion'

const handleURL = (url) => {
    return (
        () => window.open(url, '_blank')
    )
}

// 本命
const Contact = () => {
    const iconStyle = { padding: 10, fontSize: 50 };

    return(
        <div className = {classes.Contact} id='contact'>
            <div className={classes.ContactIcons}>
                <motion.div
                whileHover={{scale:1.3}}>
                     <FontAwesomeIcon 
                     className={classes.GithubIcon}
                     icon={faGithub} 
                     style={iconStyle} 
                     color='white' 
                     onClick={handleURL('https://github.com/daiki-murata?tab=repositories')} /> 
                </motion.div>
            </div>
        </div>
    )
}

export default Contact