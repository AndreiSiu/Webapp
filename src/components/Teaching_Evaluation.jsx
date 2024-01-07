import { profile_pic } from "../assets"
import styles, {layout} from "../style"
import { experience } from "../constants"

const Teaching_Evaluation = () => (
   <div className={`${layout.sectionImg} flex flex-row p-6 
   rounded-[20px] bg-dimBlue mb-10`}>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-bold text-white text-[32px] leading-[40px] mb-5">
           Evaluation Criteria
            </h4> 

            <div className={`flex-row`}>
                <div className={layout.sectionInfo}>
                    <h4 className="font-poppins font-semiBold text-white text-[20px] leading-[23px] mb-3">Labs: 40%
                    </h4>

                    <h4 className="font-poppins font-semiBold text-white text-[20px] leading-[23px] mb-3">Project: 50%
                    </h4>

                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                        The labs are to see that you understood what we saw in the courses, they are optional as long as you add the course items in the final project. This one has to be a video game.
                    </p>

                </div>
            </div>

        </div>
   </div>
)

export default Teaching_Evaluation