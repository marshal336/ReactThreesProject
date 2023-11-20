import { logo } from "../assets/images"
import { footerLinks, socialMedia } from "../base/base"
import styles from "../style"


const FooterComponent = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1 mr-10">
          <img
            src={logo}
            className="w-[266px] h-[72px]"
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-[1.5] justify-between flex-row flex-wrap md:mt-0 mt-10">
          {footerLinks.map(fl => (
            <div className="flex flex-col ss:my-0 m-4 min-w-[150px]">
              <h4 className={`text-white text-lg font-medium pb-6`}>
                {fl.title}
              </h4>
              <ul>
                {fl.links.map(fll => (
                  <li className='leading-5'>
                    <a href={fll.link}
                      className={`text-dimWhite ${styles.paragraph} text-base font-poppins hover:text-secondary`}>
                      {fll.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
