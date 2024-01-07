import styles, {layout} from "../style"
import { games } from "../constants"
import Button from './Button'


const FeatureCard = ({image, title, content, link, index}) => (
  <div 
    className={`flex flex-row p-6 
    rounded-[20px] 
    ${index !== games.length-1 ? "mb-6" : "mb-0"}
    bg-dimBlue feature-card`}>
    <div 
      className={`w-[200px] h-[150px] ${styles.flexCenter}`}>
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


const Library = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Check out my
          <br className="sm:block hidden"/> Library of games.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    
            In my software development career, I've built numerous applications and games, showcasing my versatility and problem-solving skills. Embracing new technologies, I ensure my projects are innovative and future-proof, staying ahead in the ever-evolving tech industry.
      </p>

        <Button styles="mt-10" text="About me" link="about"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {games.map((game, index) => (
          <FeatureCard key={game.id} {...game} index={index}/>
        ))}

        <div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>And many more...</p>
        </div>

      </div>

    </section>
  )
}

export default Library