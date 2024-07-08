import Image from "next/image";
import teamData from "./team.json";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Our hard working team</p>
        </header>

        <div className="row gy-4">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="member">
                <div className="member-img">
                  <Image
                    src={member.imgSrc}
                    width={200}
                    height={200}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href={member.social.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
