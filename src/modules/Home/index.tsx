import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "./components/svgComponents";
// import { CgMouse } from "react-icons/cg";
import Countdown from "./components/Countdown";

const Home = () => {
    const date = new Date('2024-02-01T12:00:00');
    return (
        <div className={styles.HomeWrapper}>
            <Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroBgElements}>
                    <HeroBgLeft className={styles.heroBgLeft} />
                    <HeroBgRight className={styles.heroBgRight} />
                </div>
                <div className={styles.heroText}>
                    <span>WEBSYNC</span>
                    {/* <b>
                        <CgMouse />
                    </b>
					<p>Scroll Down</p> */}
                </div>
                <div>
                    <Countdown targetDate={date} />
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
        </div>
    );
};

export default Home;