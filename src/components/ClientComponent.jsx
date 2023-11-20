import { clients } from "../base/base"
import styles from "../style"


const ClientComponent = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-[100px]`}>
        {clients.map(client => (
          <div key={client.id} className="">
            <img 
              src={client.logo}
              className="sm:w-[192px] w-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientComponent
