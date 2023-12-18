import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="absolute z-[1] w-[70%] h-[70%] -right-[50%] rounded-full white__gradient bottom-10 right-60" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Explore the voices and experiences of our community through 'What People are Saying About Us.' Delve into a collection of heartfelt testimonials and genuine feedback that illuminate the impact our platform has made in transforming the investment landscape for individuals worldwide. These testimonials echo stories of success, empowerment, and satisfaction, shedding light on how our innovative approach to investing has inspired and elevated the financial journeys of our users. Discover firsthand the trust, confidence, and value our community places in our mission to redefine investing for a brighter financial future.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
