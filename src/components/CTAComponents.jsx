import styles from "../style"
import Button from "./Button"


const CTAComponents = () => {
  return (
    <section className={`flex justify-between items-center ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col box-shadow bg-black-gradient-2 rounded-[20px]`}>
      <div>
        <h2 className={styles.heading2}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[445px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div>
        <Button/>
      </div>
    </section>
  )
}

export default CTAComponents
