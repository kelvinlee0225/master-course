import styles from "./style";
import {
  NavBar,
  Stats,
  Hero,
  Certificate,
  About,
  Testimonials,
  CTA,
} from "./components";
import { Footer } from "./components/Footer";

const App = () => (
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
        <Stats />
        <Certificate />
        <About />
        <Testimonials />
        <CTA />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
