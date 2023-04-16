import React from 'react'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import cl from "./Main.module.scss"
import Points from './Points/Points'
import Utility from './Utility/Utility'
import Works from './Works/Works'
const Main = () => {
  return (
    <main className={cl.Main}>
       <About />
       <Works />
       <Points />
       <Utility />
       <Contacts />
       <a href="#Header"><i className="ri-arrow-up-circle-fill"></i></a>
    </main>
  )
}

export default Main