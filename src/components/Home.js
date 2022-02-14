import { ContactDetails } from "./ContactDetails";
import html2pdf from "html2pdf.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BoxIcon } from "./BoxIcon";

function LanguageButton(props) {
  const { i18n } = useTranslation();

  let changeLanguage = (e) => {
    console.log("lang: ", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  let buttonStyle =
    props.selectedLang === props.lang
      ? "language-button selected-language-button"
      : "language-button";

  return (
    <button
      name="change-language"
      className={buttonStyle}
      title="Change language"
      id="change-language-button"
      value={props.lang}
      onClick={changeLanguage}
    >
      {props.lang}
    </button>
  );
}

function LanguageOptions() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("fi");

  const langs = ["fi", "en"];

  return (
    <div className="language-options">
      {langs.map((lang, idx, arr) => (
        <LanguageButton
          lang={lang}
          selected={selectedLang === lang}
          key={idx}
        ></LanguageButton>
      ))}
    </div>
  );
}

export function Home({ t }) {
  let contactDetails = t("contactDetails", {
    ns: "cvcontent",
    returnObjects: true,
  });
  let { city, county, country, email, phone } = contactDetails;

  function print() {
    return () => {
      var element = document.getElementById("area-cv");
      element.classList.add("print-styles");
      // document.getElementById("main");
      let opt = {
        margin: 0,
        filename: "petri-luukkonen-resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: "a4", orientation: "portrait" },
        pagebreak: { mode: "avoid-all", before: "#certificates" },
      };
      html2pdf(element, opt);

      setTimeout(() => {
        element.classList.remove("print-styles");
      }, 5000);
    };
  }

  return (
    <section className="home" id="home">
      {/*  Theme change button */}
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img
            src="assets/img/profile-picture.jpg"
            alt="Photo of Petri Luukkonen"
            className="home__img"
          />
          <h1 className="home__title">
            {t("firstName", {
              ns: "cvcontent",
            })}{" "}
            <b>
              {t("lastName", {
                ns: "cvcontent",
              })}
            </b>
          </h1>
          <h3 className="home__profession">
            {t("occupation", {
              ns: "cvcontent",
            })}
          </h3>
          <div>
            <a
              href={t("cvUrl", {
                ns: "cvcontent",
              })}
              download="CV-Petri-Luukkonen.pdf"
              className="home__button-mobile"
              id="resume-button-mobile"
            >
              {t("download")}
            </a>
          </div>
        </div>

        <ContactDetails
          city={city}
          county={county}
          country={country}
          email={email}
          phone={phone}
        ></ContactDetails>
      </div>
      <BoxIcon
        name="bx-download bx-sm"
        className="generate-pdf"
        title="Generate PDF"
        id="resume-button"
        onClick={print()}
      ></BoxIcon>
      <LanguageOptions></LanguageOptions>
    </section>
  );
}
