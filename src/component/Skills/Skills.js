import React from 'react'
import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import codeThinking from './../../img/undraw_Code_thinking_re_gka2 (1).svg'

const listTitleStyle = { fontWight: 900, color: '#9B1FE8', marginBottom: '4px' }

const frontendSkills =
    <ul>
        <li style= { listTitleStyle }>FRONTEND</li>
        <li>HTML- JavaScript - CSS</li>
        <li>React</li>
    </ul>

const frameworkSkills =
    <ul>
        <li style= { listTitleStyle }>FRAME WORK</li>
        <li>HTML5 Boilerplate - Bootstrap</li>
        <li>Material-UI - framer-motion</li>
    </ul>

const otherSkills =
    <ul>
        <li style= { listTitleStyle }>OTHER</li>
        <li>Firebase</li>
    </ul>

const totalSkills = [frontendSkills, frameworkSkills, otherSkills]

const Skills = () => {
    return(
        <div className={classes.Skills} id='skills'>
             <PageHeader title={'Skills'}/>
             <p>
                 学習した言語やスキルの紹介です。
             </p>
             <div className={classes.Container}>
                 <img src={codeThinking} alt='CodeThinking'></img>
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
             </div>
        </div>
    )
}

export default Skills