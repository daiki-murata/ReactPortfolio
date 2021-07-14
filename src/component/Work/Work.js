import React from 'react'
import PageHeader from './../PageHeader/PageHeader'
import classes from './Work.module.css'
import memo from './../../img/memo.png'
import othello from './../../img/othello.png'
import drawengSomething from './../../img/drawingSomethingApp.jpeg'
import profile from './../../img/profile_icon.png'
import typing from './../../img/typing.jpeg'
import quiz from './../../img/quiz.jpeg'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'

const WorkApp = (url, thumbnail, description) => {
    return(
        <motion.div whileHover={{scale: 1.1}} className={classes.AppContainer}>
            <div className={classes.Thumbnail}>
                <img src={thumbnail} alt='thmbnail' 
                onClick={(e) => window.open(url, '_blank').focus}
                />
            </div>
            <div className={classes.Text}>
                <p>{description}</p>
            </div>
        </motion.div>
    )
}

// 本命
const Work = () => {

    const {ref,inView} = useInView({threshold: 0.2});
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if(!inView) {
            animation.start({
                x: '-100vw'
            })
        }
    },[inView])


    return(
        <div className={classes.Work} id='work'>
            <PageHeader title={'Work'}  />
            <div ref={ref} className={classes.WorkContent}>
                <div className={classes.Paragraph}>
                    <p>
                        このポートフォリオはReact、module.css、framer-motionを使用して作っています。以下の物は画像をクリックすると利用できます。
                    </p>
                </div>
            <motion.div className={classes.Applications}
                animate={animation}
            >
                {WorkApp( 'https://daiki-murata.github.io/memoApp/',memo, memoDescription)}
                {WorkApp( 'https://daiki-murata.github.io/osero-app/',othello, othelloDescription)}
                {WorkApp( 'https://daiki-murata.github.io/drawing-something-app/',drawengSomething, drawingSomethingDescription)}
                {WorkApp( 'https://daiki-murata.github.io/portfolio/',profile, profileDescription)}
                {WorkApp( 'https://daiki-murata.github.io/typing-app/',typing, typingDescription)}
                {WorkApp( 'https://daiki-murata.github.io/quizApp/',quiz,  quizDescription)}
            </motion.div>
            </div>
        </div>
    )
}

const memoDescription = '簡単なメモアプリです。HTML、CSS、JavaScriptを使用しました。'
const othelloDescription = '簡単なオセロアプリです。HTML、CSS、JavaScriptを使用しました。コンピュータ対戦はできません。'
const drawingSomethingDescription = '簡単なお絵かきアプリです。HTML、CSS、JavaScriptを使用しました。クリックしながら動かすとカラフルな色が出ます。色は選択できません。'
const profileDescription = '過去に作ったとても簡単なポートフォリオです。HTMLとCSSを使用しています。'
const typingDescription = '簡単なタイピングゲームです。正解すると色が変わります。HTMLとCSS、JavaScriptを使用しています。'
const quizDescription = '簡単なクイズゲームです。HTMLとCSS、JavaScriptを使用しています。フレームワークはBoilerplateとBootStrapです。'

export default Work