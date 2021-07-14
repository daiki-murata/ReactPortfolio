import React from 'react'
import NavBar from './component/NavBar/NavBar'
import About from './component/About/About'
import Home from './component/Home/Home'
import Skill from './component/Skills/Skills'
import Contact from './component/Contact/Contact'
import Work from './component/Work/Work'





const App = () => {
    return (
       <div className='App'>
           <NavBar />
           <Home />
           <About />
           <Skill />
           <Work />
           <Contact />
       </div>
    )
}

export default App