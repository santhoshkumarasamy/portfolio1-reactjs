import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";
const data = [
  {
    id: 1,
    image: img1,
    title: "Crypto currency dashboard",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: img2,
    title: "Chart Templates",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: img3,
    title: "Figma Dashboard",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: img4,
    title: "Chart Templates",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    image: img5,
    title: "Chart Templates",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 6,
    image: img6,
    title: "Chart Templates",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn-primary btn" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
