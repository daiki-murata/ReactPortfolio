import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/地元の写真.jpg'

const About = () => {
    return(
        <div className={classes.AboutMe}　id='about'>
            <PageHeader title={'About me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>こんにちは！村田です！</h2>
                    <p>
                    初めまして。村田大樹と申します。新卒では製造業の派遣社員として、半年ほど働いていました。常駐先ではデータロガーを用いて、実験の分析などを行なっていました。その一方でプログラミングの勉強を始めて、その面白いと感じ始め、開発に携わって行きたい、Webに携わりたい、世の中の役に立つアプリを開発してみたいと思い、転職を決意しました。
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt='me'></img>
                </div>
            </div>
        </div>
    )
}

export default About