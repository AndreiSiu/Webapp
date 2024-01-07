import React from 'react'

import styles from '../style';


import { Navbar, Teaching_Details, Teaching_Courses, Teaching_Evaluation, Footer } from '.././components';

const Teaching = () => (
    <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Teaching_Details/>
        <Teaching_Courses/>
        <Teaching_Evaluation/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default Teaching