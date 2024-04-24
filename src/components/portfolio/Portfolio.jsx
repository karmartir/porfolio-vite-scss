import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: "./project_1.png",
    desc: "Internet store project",
  },
  {
    id: 2,
    title: "Project 2",
    img: "./project_2.png",
    desc: "Internet store project",
  },
  {
    id: 3,
    title: "Project 3",
    img: "./project_3.png",
    desc: "Internet store project",
  },
  {
    id: 4,
    title: "Project 4",
    img: "./project_4.png",
    desc: "Internet store project",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
