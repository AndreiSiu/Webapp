import { course_pic } from "../assets"
import { courses } from "../constants"
import styles, {layout} from "../style"
import Button from './Button'

const Teaching_Courses = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Courses
      </h2>
      <div className={`flex-col`}>
        {courses.map((item, index) => (
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 border-b-[1px] border-b-[#3f3r45] pb-2 rounded-[5px] hover:text-[18px] hover:text-white">
            {'> '}{item.title}
            </p>
        ))}
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={course_pic} alt="card" className="w-[90%] h-[90%] object-contain"/>
    </div>
  </section>
)

export default Teaching_Courses