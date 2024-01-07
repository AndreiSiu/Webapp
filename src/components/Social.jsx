import { card } from "../assets"
import styles, {layout} from "../style"
import Button from './Button'

const Social = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} bg-dimBlue feature-card rounded-[20px] p-10 m-5`}>
      <h2 className={styles.heading2}>
        Email & Contact
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       E-mail: andrei.vasiu@ubbcluj.ro
       <br/>
       Phone: +40756659362
      </p>
    </div>

    <div className={`${layout.sectionInfo} bg-dimBlue feature-card rounded-[20px] p-10 m-5`}>
    <h2 className={styles.heading2}>
        Current office
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Office no. 282, Strada Constanta 30-34, Vertimex Building, floor 1
      </p>
    </div>
  </section>
)

export default Social