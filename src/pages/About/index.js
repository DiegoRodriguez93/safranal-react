import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className="container">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-12 form-container">
            <h5
              className="hero-subtitle"
              dangerouslySetInnerHTML={{
                __html: t("about-subtitle"),
              }}
            ></h5>
{/*             <h2
              className="hero-title"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: t("about-title"),
              }}
            ></h2> */}
            {/* <h2 className="hero-title">We cook any dish of our gastronomy to the taste of the client.</h2> */}

            <div className="row">
              <div className="col-12">
                <h6
                  className="hero-text"
                  style={{ textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: t("about-text"),
                  }}
                ></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
