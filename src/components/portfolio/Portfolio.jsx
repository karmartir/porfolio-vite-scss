import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    title: "E-Commerce",
    img: "/images/ecommerce.png",
    desc:
      "A full-stack eCommerce application built from scratch with the MERN stack (MongoDB, Express, React, Node.js)." +
      "User authentication & authorization (JWT) * Admin dashboard for managing products, users, and orders * Product search, pagination, and reviews" +
      " * Shopping cart & checkout process * PayPal & credit card payments * Product image upload and many more features.",
    note: "This project is hosted on Render’s free tier. The server goes to sleep when inactive, so the first load may take 1–2 minutes. Please be patient — once it wakes up, the app will run smoothly. PayPal purchases are intentionally set up in developer (sandbox) mode, so no real transactions occur.",
    url: "https://proshop-2061.onrender.com/",
  },
  {
    title: "Launchpoint",
    img: "/images/launchpoint.png",
    desc: "This project was developed by Garen Martirosyan using React, Vite, React Router, and Bootstrap, in collaboration with UI/UX designer Hrant Aslanyan, who crafted the visuals using Figma and Photoshop. Together, we combined clean, functional code with elegant, user-focused design.\n",
    url: "https://launchpoint.netlify.app",
  },
  {
    title: "Gym landing page",
    img: "/images/project_2gym.png",
    desc: "A demo landing page for a fitness club.",
    url: "https://gym-project-apr-24.netlify.app/", // Demo URL for Project 2
  },
  // {
  //   title: "BearBrick Black VIP",
  //   img: "./project_4h.png",
  //   desc: "A poster design concept for BearBrick Black VIP.",
  //   url: "https://www.behance.net/gallery/162482541/Sample",
  // },
  {
    title: "Real Estate Project",
    img: "/images/project_5.png",
    desc: "Property Pulse project. For the best experience, sign in with Gmail to access all features.",
    url: "https://property-pulse-five-sigma.vercel.app",
  },
  {
    title: "Chat App Concept",
    img: "/images/project3-hi-res.png",
    desc: "A chat messenger concept design.",
    url: "https://www.behance.net/gallery/162681601/CHATapp-concept-design", // Demo URL for Project 3
  },
  {
    title: "Online Food Store",
    img: "/images/project_1.png",
    desc: "An online food store application.",
    url: "https://neon-pika-975659.netlify.app/", // Demo URL for Project 1
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
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="item image" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h3>Project {item.id}</h3>
            <h3 style={{ fontSize: "2rem" }}>{item.title}</h3>
            <p>{item.desc}</p>
            {item.note && (
              <p>
                <strong>Note: </strong>
                {item.note}
              </p>
            )}
            <div>
              <button onClick={handleDemoClick}>View Project</button>
            </div>

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
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item, index) => (
        <Single item={{ ...item, id: index + 1 }} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
