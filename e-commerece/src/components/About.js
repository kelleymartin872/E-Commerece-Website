import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              eos distinctio doloremque hic neque reiciendis, provident adipisci
              quod amet sit est commodi nobis officiis quos debitis odit,
              aliquid, doloribus earum deleniti. Perspiciatis incidunt est magni
              pariatur soluta in ea! Iusto, ipsum officia exercitationem quae
              accusantium magnam facere, voluptatem quia odit ipsam omnis quidem
              laboriosam doloremque minima repellendus, corporis animi tempore
              temporibus dolor? Asperiores sunt saepe, ipsum fugiat veritatis
              perspiciatis id ad. Qui sit illo a, nihil eius, maxime quidem nam
              fugit omnis sunt distinctio doloremque dicta soluta consequatur
              dignissimos odit quia nisi in odio pariatur id autem dolor!
              Dolorem, inventore?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/asset/images/about.png"
              alt="About us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
