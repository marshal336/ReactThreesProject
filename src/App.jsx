import style from "./style"
import NavBarComponent from "./components/NavBarComponent"
import HeroCompoment from "./components/HeroCompoment"
import StatsComponent from "./components/StatsComponent"
import BuisnesComponent from "./components/BuisnesComponent"
import BillingComponent from "./components/BillingComponent"
import CardDealComponent from "./components/CardDealComponent"
import TestComponent from "./components/TestComponent"
import ClientComponent from "./components/ClientComponent"
import CTAComponents from "./components/CTAComponents"
import FooterComponent from "./components/FooterComponent"
import aos from "aos"
import 'aos/dist/aos.css';
import React from "react"

function App() {
  React.useEffect(() => {
    aos.init()
  }, [])

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <NavBarComponent />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <HeroCompoment />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <StatsComponent />
          <BuisnesComponent />
          <BillingComponent />
          <CardDealComponent />
          <TestComponent />
          <ClientComponent />
          <CTAComponents />
          <FooterComponent />
        </div>
      </div>
    </div>
  )
}

export default App
