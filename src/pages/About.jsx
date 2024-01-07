import React from 'react'

import styles from '../style';


import { Navbar, Identity, Footer, Experience, Education, FullLibrary } from '.././components';

const About = () => (
    <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Identity/>
        <Experience/>
        <Education/>
        <FullLibrary/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default About