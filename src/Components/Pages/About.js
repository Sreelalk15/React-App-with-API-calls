import React from "react";
import Header from "../../Components/Includes/Header";
import Team from "../../Components/Includes/Team";
import Footer from "../../Components/Includes/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="container">
          <div className="about-main">
            <h3>About</h3>
            <div className="about-top">
              <div className="col-md-6 about-left">
                <img src="assets/images/abt-1.jpg" alt="" />{" "}
              </div>
              <div className="col-md-6 about-left">
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque la udantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia.
                </p>
                <p>
                  Donec sagittis interdum tellus sed bibendum. Aen ean fringilla
                  ut lacus eu vehicula. Curabitur non nibh quis nisi vestibulum
                  aliquet non sed dolor. Ut est risus, consectetur sit amet
                  pretium in, cursus in dui. Donec ac rhoncus libero.
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="container">
          <div className="team-main">
            <h3>Meet Our Team</h3>
            <div className="team-top">
              <Team
                image="assets/images/team-1.jpg"
                name="Inga North"
                details="Praesent vestibulum molestie lacus. Aenean nonummy hendrerit."
              ></Team>

              <Team
                image="assets/images/team-3.jpg"
                name="Johnson"
                details="Praesent vestibulum molestie lacus. Aenean nonummy hendrerit."
              ></Team>

              <Team
                image="assets/images/team-2.jpg"
                name="Laura Stegner"
                details="Praesent vestibulum molestie lacus. Aenean nonummy hendrerit."
              ></Team>

              <Team
                image="assets/images/team-4.jpg"
                name="Mark Johnson"
                details="Praesent vestibulum molestie lacus. Aenean nonummy hendrerit."
              ></Team>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="advn">
        <div className="container">
          <div className="advn-main">
            <div className="col-md-6 advn-left">
              <h3>Our Advantages</h3>
              <div className="advn-one">
                <div className="ad-mian">
                  <div className="ad-left">
                    <p>1</p>
                  </div>
                  <div className="ad-right">
                    <h4>Elacus a porta varius dui</h4>
                    <p>
                      In neque arcu, vulputate vitae dignissim id, placerat
                      adipiscing lorem. Nulla consectetur adipiscing metus vel
                      pulvinar. Aenean molestie mauris non diam tincidunt
                      faucibus.{" "}
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="ad-mian">
                  <div className="ad-left">
                    <p>2</p>
                  </div>
                  <div className="ad-right">
                    <h4>Elacus a porta varius dui</h4>
                    <p>
                      In neque arcu, vulputate vitae dignissim id, placerat
                      adipiscing lorem. Nulla consectetur adipiscing metus vel
                      pulvinar. Aenean molestie mauris non diam tincidunt
                      faucibus.{" "}
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="ad-mian">
                  <div className="ad-left">
                    <p>3</p>
                  </div>
                  <div className="ad-right">
                    <h4>Elacus a porta varius dui</h4>
                    <p>
                      In neque arcu, vulputate vitae dignissim id, placerat
                      adipiscing lorem. Nulla consectetur adipiscing metus vel
                      pulvinar. Aenean molestie mauris non diam tincidunt
                      faucibus.{" "}
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 advn-right">
              <h3>Skills</h3>
              <div className="advn-two">
                <h4>
                  Erci eu tincidunt lacinia, elit quam ultri ces ipsum, quis
                  ultricies ipsum ante
                </h4>
                <p>
                  Donec sagittis interdum tellus sed bibendum. Aen ean fringilla
                  ut lacus eu vehicula. Curabitur non nibh quis nisi vestibulum
                  aliquet non sed dolor. Ut est risus, consectetur sit amet
                  pretium in, cursus in dui. Donec ac rhoncus libero.
                </p>
                <ul>
                  <li>
                    <a href="#">Praesent vestibulum molestie lacus</a>
                  </li>
                  <li>
                    <a href="#">Donec sagittis interdum tellus</a>
                  </li>
                  <li>
                    <a href="#">Nulla consectetur adipiscing</a>
                  </li>
                  <li>
                    <a href="#">Donec ac rhoncus libero.</a>
                  </li>
                  <li>
                    <a href="#">Erci eu tincidunt lacinia</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
