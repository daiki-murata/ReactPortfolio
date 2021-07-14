import React from 'react'
// import {  FaGithub } from "react-icons/fa";
import classes from './Contact.module.css'
import {motion} from 'framer-motion'

// const handleURL = (url) => {
//     return (
//         () => window.open(url, '_blank')
//     )
// }

// 本命
const Contact = () => {
    return(
        <div className = {classes.Contact} id='contact'>
            <div className={classes.ContactIcons}>
                <motion.div
                whileHover={{scale:1.3}}>
                    {/* <FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/daiki-murata?tab=repositories')} /> */}
                </motion.div>
            </div>
        </div>
    )
}

export default Contact