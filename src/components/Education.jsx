import { profile_pic } from "../assets"
import styles, {layout} from "../style"
import { education } from "../constants"

const Education = () => (
   <div className={`${layout.sectionImg} flex flex-row p-6 
   rounded-[20px] bg-dimBlue mb-10`}>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-bold text-white text-[32px] leading-[40px] mb-1">
            Education
            </h4> 

            <div className={`flex-col`}>
                {education.map((item, index) => (
                    <div key={item.id} className="mt-5">
                        <h4 className="font-poppins font-bold text-white text-[23px] leading-[23px] mb-1">
                            {item.degree}
                        </h4>

                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                            {item.place}
                        </h4>

                        <p className="font-poppins font-normal text-secondary text-[18px] leading-[24px] mb-1">
                        {item.year}
                        </p>

                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                        {item.project}
                        </p>

                    </div>
                ))}

            </div>
        </div>
   </div>
)

export default Education