import React from 'react'

import styles from '../style';


import { Navbar, Footer, Social } from '.././components';

const Contact = () => (
    <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Social/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default Contact