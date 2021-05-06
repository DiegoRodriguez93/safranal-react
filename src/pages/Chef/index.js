import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function Chef() {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className="container">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-12 form-container">
            <h5
              className="hero-subtitle"
              dangerouslySetInnerHTML={{
                __html: t("chef-subtitle"),
              }}
            ></h5>
            <h2
              className="hero-title"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: t("chef-title"),
              }}
            ></h2>
            {/*                 <h2 className="hero-title">We cook any dish of our gastronomy to the taste of the client.</h2> */}

            <div className="row">
              <div className="col-lg-6 sm-12">
                <img
                  className="ordenador"
                  src="/images/left-chef.png"
                  style={{ width: "100%" }}
                  alt="cook chef"
                />
              </div>
              <div className="col-lg-6 sm-12">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("chef-description"),
                  }}
                ></p>

                <div className="row" style={{ marginTop: "45px" }}>
                  <div className="col-3">
                    <img
                      src="/images/chef.png"
                      style={{ width: "100%" }}
                      alt="chef face"
                    />
                  </div>
                  <div className="col-9">
                    <span
                      className="chef-name cursiva"
                      dangerouslySetInnerHTML={{
                        __html: t("Davi Martin"),
                      }}
                    ></span>
                    <br />
                    <span
                      className="chef-title"
                      dangerouslySetInnerHTML={{
                        __html: t("Principal chef"),
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Chef;
