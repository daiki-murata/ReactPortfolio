import React from 'react'
import classes from './Home.module.css'
import home from '../../img/portfolioHome.png'

const Home = () => {
    return(
        <div className={classes.Home} id='home'>
           <div className={classes.Container}>
              <img src={home} alt='homeの写真' />
           </div>
        </div>
    )
}

export default Home