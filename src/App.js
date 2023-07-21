import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <header id="header">
        <h1>I'm addicted to coding!!</h1>
        <p>
          Explore my works, skills and reach me out if I can fit to your project
        </p>
      </header>
      <div className="arrow-wrapper">
        <a href="#header">
          <div className="arrow-up"></div>
        </a>
      </div>

      <section id="section1" className="section1">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eget sem vitae metus aliquam faucibus. In consectetur, leo et
          consequat efficitur, ex purus facilisis nisi, vitae efficitur mauris
          erat sit amet ipsum.
        </p>
        <p>
          Proin sed turpis nec dui convallis dictum. Fusce lacinia commodo
          turpis, nec convallis metus tristique at. Nulla facilisi. Vestibulum
          sit amet magna at justo fermentum pulvinar.
        </p>

        <p>
          Aliquam pharetra semper risus, vitae pellentesque sem malesuada nec.
          In egestas laoreet quam at fermentum. Nunc bibendum, turpis sed
          condimentum tincidunt, justo dui tempor tortor, non pharetra velit
          felis ut nisi.
        </p>
        <p>
          Vivamus ac nulla fringilla, lobortis urna eget, eleifend lacus. Donec
          ullamcorper nibh ut laoreet eleifend. Ut a ultrices dolor.
        </p>
        <p>
          Maecenas consequat nibh vel eleifend vestibulum. Duis convallis dolor
          et varius tempus. Nunc non consequat arcu. Sed et orci velit. Integer
          gravida, justo ac rutrum vulputate, velit turpis tincidunt nisi, ut
          semper risus sem a metus.
        </p>
      </section>

      <section id="section2" className="section2">
        <h1>Technologies</h1>
        <div className="card">
          <img
            src=" https://storage.googleapis.com/zingchart-blog/zing-content/2016/06/react-1.png  "
            alt="react-logo"
          />
          <img
            src=" https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png "
            alt="firebase-logo"
          />
          <img
            src=" https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo "
            alt="css-logo"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
