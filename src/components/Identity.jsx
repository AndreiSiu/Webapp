import { profile_pic } from "../assets"
import styles, {layout} from "../style"

const Identity = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Vasiu Andrei, Associate Professor
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <a href="https://www.ubbcluj.ro/ro/" className="hover:text-secondary">- Babes-Bolyai University</a>
        <br/>
        <a href="https://www.cs.ubbcluj.ro/about-the-faculty/departments/department-of-computer-science/" className="hover:text-secondary">- Department of Computer Science</a>
        <br/>
        <a href="https://www.cs.ubbcluj.ro/" className="hover:text-secondary">- Faculty of Mathematics and Computer Science</a>
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={profile_pic} alt="card" className="w-[70%] h-[70%] rounded-[20px] object-contain"/>

      <div
           className="absolute z-[3] -left-1/2 top-0 w-[100%] h-[50%] rounded-full white__gradient"/>
        <div
           className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>

    </div>
  </section>
  
)

export default Identity