import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Contact() {
  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    Swal.fire(
      t("Correct!"),
      t("The message was sent successfully, someone will contact you soon!"),
      "success"
    );
    e.target.reset();
  };

  return (
    <Fade>
      <div className="container">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-12 form-container">
            <h5
              className="hero-subtitle"
              dangerouslySetInnerHTML={{
                __html: t("contact-subtitle"),
              }}
            ></h5>
            <h2
              className="hero-title"
              dangerouslySetInnerHTML={{
                __html: t("contact-title"),
              }}
            ></h2>

            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <div className="col-lg-6 sm-12">
                <input
                  type="text"
                  className="input-form"
                  name="first_name"
                  placeholder={t("First name*")}
                  ref={register({ required: true })}
                />
                <span className="errors">
                  {errors.first_name && t("First name is required")}
                </span>
              </div>
              <div className="col-lg-6 sm-12">
                <input
                  type="text"
                  className="input-form"
                  name="last_name"
                  placeholder={t("Last name")}
                  ref={register}
                />
              </div>
              <div className="col-lg-6 sm-12">
                <input
                  type="email"
                  name="email"
                  className="input-form"
                  placeholder="Email*"
                  ref={register({ required: true })}
                />
                <span className="errors">
                  {errors.email && t("Email is required")}
                </span>
              </div>
              <div className="col-lg-6 sm-12">
                <input
                  type="number"
                  name="phone"
                  className="input-form"
                  placeholder={t("Phone number")}
                  ref={register}
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="input-form"
                  rows="3"
                  placeholder={t("Message*")}
                  ref={register({ required: true })}
                ></textarea>
                <span className="errors">
                  {errors.message && t("Message is required")}
                </span>
              </div>
              <div
                className="col-12"
                style={{
                  textAlign: "center",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <button type="submit" className="hero-button">
                  {t("Send Message")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
