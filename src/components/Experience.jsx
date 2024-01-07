
import {layout} from "../style"
import { experience } from "../constants"

const Experience = () => (
   <div className={`${layout.sectionImg} flex flex-row p-6 
   rounded-[20px] bg-dimBlue mb-10`}>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-bold text-white text-[32px] leading-[40px] mb-1">
            Professional Experience
            </h4> 

            <div className={`flex-col`}>
                {experience.map((item, index) => (
                    <div key={item.id} className="mt-5">
                        <h4 className="font-poppins font-bold text-white text-[23px] leading-[23px] mb-1">
                            {item.title}
                        </h4>

                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                            {item.company}
                        </h4>

                        <p className="font-poppins font-normal text-secondary text-[18px] leading-[24px] mb-1">
                        {item.start} - {item.end}
                        </p>

                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                        {item.description}
                        </p>

                    </div>
                ))}

            </div>
        </div>
   </div>
)

export default Experience