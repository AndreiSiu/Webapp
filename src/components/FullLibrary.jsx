import styles, {layout} from "../style"
import { fullGameList } from "../constants"


const FeatureCard = ({image, title, content, link, index}) => (
  <div 
    className={`flex flex-row p-6 
    rounded-[20px] 
    ${index !== fullGameList.length-1 ? "mb-6" : "mb-0"}
    bg-dimBlue feature-card xs:flex xs:flex-col md:flex-row`}>
    <div 
      className={`w-[150px] h-[100px] ${styles.flexCenter}`}>
        <img 
          src={image} alt="icon" 
          className="w-[100%] h-[100%] object-cover"/>
      </div>
      <div className="flex-1 flex flex-col ml-3"> 
        <h4 
          className="font-poppins font-semibold 
          text-white text-[18px] leading-[23px] 
          mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal 
          text-dimWhite text-[16px] leading-[24px] 
          mb-1">
          {content}
        </p>
        <a href={link} className="font-poppins font-normal text-[16px] text-white cursor-pointer">Click here to check out the game</a>
      </div>
  </div>
)


const FullLibrary = () => {
  return (
    <div className={`${layout.sectionImg} flex flex-row p-6 
    rounded-[20px] bg-dimBlue mb-10`}>
         <div className="flex-1 flex flex-col ml-3">
             <h4 className="font-poppins font-bold text-white text-[32px] leading-[40px] mb-5">
             My Library of published games
             </h4> 

             <div className={`flex-col`}>
                {fullGameList.map((game, index) => (
                <FeatureCard key={game.id} {...game} index={index}/>
                ))}
            </div>

         </div>
    </div>
  )
}

export default FullLibrary