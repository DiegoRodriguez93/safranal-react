import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Index() {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-12">
            <h2 className="hero-title" style={{ marginTop: "26%" }}>
              {" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: t("inicio-welcome"),
                }}
              />
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t("inicio-message"),
              }}
            ></p>
            <Link to="/menu">
              <button className="hero-button">
                {t("See our menu")} -{">"}
              </button>
            </Link>
          </div>
          <div className="col-lg-6 sm-12"></div>
        </div>
      </div>
    </Fade>
  );
}

/* export default index */
