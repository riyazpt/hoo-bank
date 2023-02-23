import React from "react";
import styles from "./style";
import {
  NavBar,
  Stats,
  Billing,
  CardDeal,
  Testimonial,
  Buisness,
  Button,
  Clients,
  CTA,
  FeedBack,
  Footer,
  GetStarted,
  Hero,
} from "./components/index";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /><Buisness/>
           <Billing /> 
           <CardDeal />
            <Testimonial />
            <Clients/>
            <CTA />
            <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
