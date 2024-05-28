import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: "./project_1.png",
    desc: "Internet store project",
    url: "https://neon-pika-975659.netlify.app/" // Demo URL for Project 1
  },
  {
    id: 2,
    title: "Project 2",
    img: "./project_2gym.png",
    desc: "The Fitness club demo",
    url: "https://gym-project-apr-24.netlify.app/" // Demo URL for Project 2
  },
  {
    id: 3,
    title: "Project 3",
    img: "./project3-hi-res.png",
    desc: "The chat messenger",
    url: "https://www.behance.net/gallery/162681601/CHATapp-concept-design" // Demo URL for Project 3
  },
  {
    id: 4,
    title: "Project 4",
    img: "./project_4h.png",
    desc: "BearBrick Black VIP - A poster design concept",
    url:"https://www.behance.net/gallery/162482541/Sample"
  },
  {
    id: 5,
    title: "Project 5",
    img: "./project_5.png",
    desc: "Property Pulse",
    url:"https://property-portfolio-pulse.netlify.app"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const handleDemoClick = () => {
    if (item.url) {
      window.open(item.url, "_blank"); // Open the URL in a new tab
    } else {
      console.log("No demo URL provided for this project.");
    }
  };

  return (
    <section id="Portfolio" >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="item image" />
         
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.url && <button onClick={handleDemoClick}>See project</button>}
     <hr />
       
          </motion.div>
     
        </div>

      </div>
  
    </section>
  );
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
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}   />
      ))}
      
    </div>
  );
};

export default Portfolio;
