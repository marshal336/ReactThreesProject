import { apple, bill, google } from "../assets/images"
import styles, { layout } from "../style"


const BillingComponent = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div data-aos="fade-right" data-aos-duration="2000"  className={`${layout.sectionImgReverse} relative`}>
        <img
          src={bill}
          className="w-full h-full z-[5]"
        />

        <div className='absolute z-[3] -left-1/2 top-0 w-2/4 h-2/4 rounded-full white__gradient' />
        <div className='absolute z-[3] -left-1/2 top-0 w-2/4 h-2/4 rounded-full pink__gradient' />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000"  className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="md:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            className="w-[128px] h-[47px] mr-5 object-contain"
          />
          <img
            src={google}
            className="w-[128px] h-[47px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default BillingComponent
