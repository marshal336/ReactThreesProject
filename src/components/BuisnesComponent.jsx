import { features } from "../base/base"
import styles, { layout } from "../style"
import Button from './Button'
import FeatureContent from "./FeatureContent"


const BuisnesComponent = () => {

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button
          styles='mt-10'
        />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureContent
            key={feature.id}
            {...feature}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default BuisnesComponent
