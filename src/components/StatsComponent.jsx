import { stats } from "../base/base"
import style from "../style"

const StatsComponent = () => {
    return (
        <section className={`flex-row sm:mb-20 flex-wrap ${style.flexCenter}`}>
            {stats.map(stat => (
                <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row`}>
                    <h4 className="font-poppins xs:text-[40px] font-semibold text-[30px] text-white">
                        {stat.value}
                    </h4>
                    <p className="font-poppins xs:text-[20px] font-normal text-[15px] 
                    text-white text-gradient uppercase ml-6">
                        {stat.title}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default StatsComponent
