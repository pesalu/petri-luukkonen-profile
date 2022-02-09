import { ContactDetails } from "./ContactDetails";

export function Home({ t }) {
  let contactDetails = t("contactDetails", {
    ns: "cvcontent",
    returnObjects: true,
  });
  let { city, county, country, email, phone } = contactDetails;
  return (
    <section className="home" id="home">
      {/*  Theme change button */}
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src="assets/img/perfil.jpg" alt="" className="home__img" />
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
          {/*  Button to generate and download the pdf. Available for
          desktop.  assets/pdf/ResumeCvPetriLuukkonen.pdf */}
          <div>
            <a
              href={t("cvUrl", {
                ns: "cvcontent",
              })}
              download="CV-Petri-Luukkonen-fin.pdf"
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
      {/*  Theme change button */}
      {/* <box-icon
           name="moon"
           class="change-theme"
           title="Theme"
           id="theme-button"
          ></box-icon> */}
      {/*  button to generate and download the pdf */}
      <box-icon
        name="download"
        class="generate-pdf"
        title="Generate PDF"
        id="resume-button"
        onClick={() => {
          var link = document.createElement("a");
          link.href = t("cvUrl", {
            ns: "cvcontent",
          });
          link.download = "CV-Petri-Luukkonen-fin.pdf";
          link.dispatchEvent(new MouseEvent("click"));
        }}
      ></box-icon>
      {/* <div className="language-options">
           <button
             name="change-language"
             className="language-button"
             title="Change language"
             id="change-language-button"
             value="en"
             onClick={changeLanguage}
           >
             EN
           </button>
           <button
             name="change-language"
             className="language-button"
             title="Change language"
             id="change-language-button"
             value="fi"
             onClick={changeLanguage}
           >
             FIN
           </button>
          </div> */}
    </section>
  );
}
