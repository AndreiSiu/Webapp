import { card } from "../assets"
import styles, {layout} from "../style"
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover superior investment opportunities <br className="sm:block hidden"/> in a few simple steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Unlock the gateway to exceptional investment options effortlessly. Our streamlined process empowers you to explore, evaluate, and seize the most promising investment avenues with ease. Experience a simplified journey towards securing your financial future.
      </p>
    <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>

  </section>
)

export default CardDeal