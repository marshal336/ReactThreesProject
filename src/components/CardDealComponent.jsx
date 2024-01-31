import { card } from "../assets/images"
import styles, { layout } from "../style"
import Button from "./Button"



const CardDealComponent = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} leading-normal mb-6`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mb-12`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div data-aos="zoom-in"  data-aos-duration="1000" className={layout.sectionImg}>
        <img 
          src={card}
          className="w-full h-full"
        />
      </div>
    </section>
  )
}

export default CardDealComponent
