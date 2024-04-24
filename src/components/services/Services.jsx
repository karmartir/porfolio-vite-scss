import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/office.jpg" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT CAN I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Virtual</h2>
          <p>
            I possess strong skills in working virtually, utilizing
            communication tools and online platforms to effectively collaborate
            with remote teams and deliver exceptional results.
          </p>
          <button>Go</button>
        </div>

        <div className="box">
          <h2>Hybrid</h2>
          <p>
            I thrive in hybrid work environments, seamlessly transitioning
            between virtual and in-person settings to maximize advantages and
            maintain effective communication and collaboration.
          </p>
          <button>Go</button>
        </div>

        <div className="box">
          <h2>In Person</h2>
          <p>
            When working in person, I leverage my interpersonal skills and
            adaptability to establish strong working relationships, contributing
            to a positive and collaborative team atmosphere.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
