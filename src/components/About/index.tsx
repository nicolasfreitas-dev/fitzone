import "./style.scss"
import aboutImg from "../../assets/about-img.jpg"

export default function About() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">Sobre nós</h2>
            <div className="about__banner">
                <p className="about__banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo tempore voluptatem maiores optio saepe harum rem eveniet voluptate rerum. Omnis quia aliquid magni alias iste possimus reiciendis incidunt quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias optio aspernatur quod impedit facere cum exercitationem. Provident veritatis ullam repellendus ex aliquam quis excepturi? Quo expedita dolores officia voluptatum. Eum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis, commodi aut ullam ut delectus quae aliquam! A itaque accusantium inventore quam omnis delectus porro earum ipsa, reprehenderit facilis assumenda.</p>
                <img className="about__banner-img" src={aboutImg} alt="fitzone trainer and student" />
            </div>
        </section>
    )
};
