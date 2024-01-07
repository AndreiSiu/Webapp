import React from 'react'

import styles from '../style';

import { Navbar, Comments, Testimonials, Footer } from '.././components';


const Feedback = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Comments/>
                <Footer/>
            </div>
        </div>
    </div>
)

export default Feedback