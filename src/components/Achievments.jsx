import {achievments} from '../constants'
import styles from '../style'

const Achievments = () => (
  <section 
    className={`${styles.flexCenter} 
    flex-row flex-wrap sm:mb-20 mb-6`}>
      {achievments.map((achievment) => (
        <div 
          key={achievment.id} 
          className={`flex-1 flex justify-start items-center flex-row m-3 bg-dimBlue rounded-[12px] p-5`}>
          <h4 
            className='font-poppins font-semibold 
            xs:text-[40px] text-[30px] xs:leading-[53px] 
            leading-[43px] text-white'>{achievment.value}</h4>

          <p className='font-poppins font-normal 
            xs:text-[20px] text-[15px] xs:leading-[26px] 
            leading-[21px] text-gradient uppercase ml-3'>{achievment.title}</p>
        </div>
      ))}

  </section>
)

export default Achievments