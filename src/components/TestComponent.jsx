import { feedback } from "../base/base"
import styles, { layout } from "../style"
import FeedBackCard from "./FeedBackCard"


const TestComponent = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      <div className={`flex md:flex-row flex-col relative items-center justify-between sm:mb-16 mb-6 z-[1]`}>
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className={"flex flex-wrap justify-between max-lg:justify-center w-full feedback-container relative z-[1]"}>
        {feedback.map(card => (
            <FeedBackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default TestComponent
