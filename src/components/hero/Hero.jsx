import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          // animate="animate"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>
            GAREN <br /> MARTIROSYAN
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full stack developer
            <br /> and UI/UX designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} onClick={() => scrollToSection('Portfolio')}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants} onClick={() => scrollToSection('Contact')}>
             <a href={`#Contact`}>
              Contact me
             </a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/images/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img className="first-image" src="/images/front-picture.png" alt="front-picture" />
      </div>
    </div>
  );
};

export default Hero;
