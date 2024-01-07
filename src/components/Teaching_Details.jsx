import { card } from "../assets"
import styles, {layout} from "../style"
import Button from './Button'

const Teaching_Details = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} bg-dimBlue feature-card rounded-[20px] p-10 m-5`}>
      <h2 className={styles.heading2}>
        About
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       This course will cover a variaty of aspects of creating a video game, from art to mechanics and finally deploying one.
       <br/>
        We will learn how to use different engines and modeling apps.
      </p>
    </div>

    <div className={`${layout.sectionInfo} bg-dimBlue feature-card rounded-[20px] p-10 m-5`}>
        <section className="border-b-[1px] border-b-[#545454] w-full flex justify-between md:flex-row flex-col pt-6 ">
            <div className={layout.sectionInfo}>
                <h4 className="font-poppins font-bold text-white text-[20px] leading-[23px] mb-1">Course & Seminar:</h4>
            </div>
            <div>
                <h4 className="font-poppins font-semibold text-dimWhite text-[16px] leading-[23px] mb-1">Every Wednesday 18:00 - 20:00</h4>
            </div>
        </section>

        <section className="w-full flex justify-between md:flex-row flex-col pt-6 ">
            <div className={layout.sectionInfo}>
                <h4 className="font-poppins font-bold text-white text-[20px] leading-[23px] mb-1">Teams Code:</h4>
            </div>
            <div>
                <h4 className="font-poppins font-semibold text-dimWhite text-[16px] leading-[23px] mb-1">jk2xl0</h4>
            </div>
        </section>

    </div>
  </section>
)

export default Teaching_Details