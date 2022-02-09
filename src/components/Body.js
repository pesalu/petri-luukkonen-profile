import "../styles/css/styles.css";
import { useTranslation } from "react-i18next";

let Body = () => {
  const { t } = useTranslation("translations", "cvcontent");
  const { i18n } = useTranslation();

  let changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#" className="nav__logo">
            {t("fullName", { ns: "cvcontent", returnObjects: true })}{" "}
            {/* <span class="smallText">
              {t("titles", { ns: "cvcontent", returnObjects: true }).join(", ")}
            </span> */}
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <box-icon name="home" class="nav__icon"></box-icon>
                  {t("home", { ns: "translations" })}
                </a>
              </li>
              <li className="nav__item">
                <a href="#profile" className="nav__link">
                  <box-icon name="user" class="nav__icon"></box-icon>
                  {t("profile", { ns: "translations" })}
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <box-icon name="book" class="nav__icon"></box-icon>
                  {t("education", { ns: "translations" })}
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <box-icon name="receipt" class="nav__icon"></box-icon>
                  {t("skills", { ns: "translations" })}
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <box-icon name="briefcase" class="nav__icon"></box-icon>
                  {t("experience", { ns: "translations" })}
                </a>
              </li>
              <li className="nav__item">
                <a href="#certificates" className="nav__link">
                  <box-icon name="award" class="nav__icon"></box-icon>
                  {t("certificates", { ns: "translations" })}
                </a>
              </li>
              {/* <li className="nav__item">
                <a href="#references" className="nav__link">
                  <box-icon name="link-external" class="nav__icon"></box-icon>
                  {t("references", { ns: "translations" })}
                </a>
              </li> */}
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <box-icon name="grid-alt"></box-icon>
          </div>
        </nav>
      </header>
      <main className="l-main bd-container">
        {/*  All elements within this div, is generated in PDF */}
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* ========== HOME ========== */}
            <section className="home" id="home">
              {/*  Theme change button */}
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img
                    src="assets/img/perfil.jpg"
                    alt=""
                    className="home__img"
                  />
                  <h1 className="home__title">
                    {t("firstName", { ns: "cvcontent" })}{" "}
                    <b>{t("lastName", { ns: "cvcontent" })}</b>
                  </h1>
                  <h3 className="home__profession">
                    {t("occupation", { ns: "cvcontent" })}
                  </h3>
                  {/*  Button to generate and download the pdf. Available for
                  desktop.  assets/pdf/ResumeCvPetriLuukkonen.pdf */}
                  <div>
                    <a
                      href={t("cvUrl", { ns: "cvcontent" })}
                      download="CV-Petri-Luukkonen-fin.pdf"
                      className="home__button-mobile"
                      id="resume-button-mobile"
                    >
                      {t("download")}
                    </a>
                  </div>
                </div>

                <div className="home__address bd-grid">
                  <span className="home__information">
                    <box-icon name="map" class="home__icon"></box-icon>
                    {t("contactDetails.city", { ns: "cvcontent" })},
                    {t("contactDetails.county", { ns: "cvcontent" })}
                  </span>
                  <span className="home__information">
                    <box-icon name="envelope" class="home__icon"></box-icon>
                    {t("contactDetails.email", { ns: "cvcontent" })}
                  </span>
                  <span className="home__information">
                    <box-icon name="phone" class="home__icon"></box-icon>
                    {t("contactDetails.phone", { ns: "cvcontent" })}
                  </span>
                </div>
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
                  link.href = t("cvUrl", { ns: "cvcontent" });
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
            {/* ========== SOCIAL ========== */}
            <section className="social section">
              <h2 className="section-title">{t("social")}</h2>
              <div className="social__container bd-grid">
                <a
                  href={t("contactDetails.socialmedia.linkedin", {
                    ns: "cvcontent",
                  })}
                  target="_blank"
                  className="social__link"
                >
                  <box-icon name="linkedin-square" type="logo"></box-icon>
                  Petri Luukkonen
                </a>
                <a
                  href={t("contactDetails.socialmedia.soundcloud", {
                    ns: "cvcontent",
                  })}
                  target="_blank"
                  className="social__link"
                >
                  <box-icon name="soundcloud" type="logo"></box-icon>
                  Film Music Enthusiast (Musiikkiprojekteja)
                </a>
              </div>
            </section>
            {/* ========== PROFILE ========== */}
            <section className="profile section" id="profile">
              <h2 className="section-title">{t("profile")}</h2>
              <p className="profile__description">
                {t("profileDescription", { ns: "cvcontent" })}
              </p>
            </section>
            {/* ========== EDUCATION ========== */}
            <section className="education section" id="education">
              <h2 className="section-title">{t("education")}</h2>

              <div className="education__container bd-grid">
                {t("education", { ns: "cvcontent", returnObjects: true }).map(
                  (degree, idx, arr) => {
                    return (
                      <div className="education__content" key={idx}>
                        <div className="education__time">
                          {degree.schoolLogoUrl && (
                            <img
                              src={degree.schoolLogoUrl}
                              alt="University of Helsinki logo"
                              className="logo__img__small"
                            />
                          )}
                        </div>
                        <div className="education__data bd-grid">
                          <h3 className="education__title">{degree.degree}</h3>
                          <span className="education__studies">
                            {degree.major} <br /> {degree.school}
                          </span>
                          <span className="education__year">
                            {degree.period.startDate} - {degree.period.endDate}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>
            {/* ========== SKILLS ========== */}

            <section className="skills section" id="skills">
              <h2 className="section-title">{t("skills")}</h2>
              <div className="skills__content bd-grid">
                <div className="skill__content">
                  <h3 className="certificate__title">
                    {t("programming-languages")}
                  </h3>
                  <ul className="skills__data">
                    {t("skills", { ns: "cvcontent", returnObjects: true }).map(
                      (skill, idx, arr) => {
                        return (
                          skill.type === "programming-language" && (
                            <li className="skills__name" key={idx}>
                              <span className="skills__circle"></span>
                              {skill.name}
                            </li>
                          )
                        );
                      }
                    )}
                  </ul>
                </div>

                <div className="skill__content">
                  <h3 className="certificate__title">
                    {t("application-frameworks")} / {t("libraries")}
                  </h3>
                  <ul className="skills__data">
                    {t("skills", { ns: "cvcontent", returnObjects: true }).map(
                      (skill, idx, arr) => {
                        return (
                          (skill.type === "application-framework" ||
                            skill.type === "software-library") && (
                            <li className="skills__name" key={idx}>
                              <span className="skills__circle"></span>
                              {skill.name}
                            </li>
                          )
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="resume__right">
            {/* ========== EXPERIENCE ========== */}
            <section className="experience section" id="experience">
              <h2 className="section-title">{t("experience")}</h2>

              <div className="experience__container bd-grid">
                {t("experience", { ns: "cvcontent", returnObjects: true }).map(
                  (exp, idx, arr) => {
                    return (
                      <div className="experience__content" key={idx}>
                        <div className="experience__time">
                          {exp.companyLogo && (
                            <img
                              src={exp.companyLogo}
                              alt="Employer company logo"
                              className="logo__img__small"
                              onClick={() => {
                                window.open(exp.organizationUrl, "_blank");
                              }}
                            ></img>
                          )}

                          {/* <span className="experience__rounder"></span> */}
                          {/* {idx < arr.length - 1 && (
                            <span className="experience__line"></span>
                          )} */}
                        </div>

                        <div className="experience__data bd-grid">
                          <h3 className="experience__title">
                            {exp["job-title"]}
                          </h3>
                          <span className="experience__company">
                            {exp.period.startDate} - {exp.period.endDate} |{" "}
                            {exp.employer}
                          </span>
                          <p className="experience__description" key={idx}>
                            {exp.descriptions.join(". ")}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>
            {/* ========== CERTIFICATES ========== */}
            <section className="certificate section" id="certificates">
              <h2 className="section-title">{t("certificates")}</h2>

              <div className="certificate__container bd-grid">
                {t("certificates", {
                  ns: "cvcontent",
                  returnObjects: true,
                }).map((certificate, idx, arr) => {
                  console.log("test");
                  return (
                    <div className="certificate__content" key={idx}>
                      {certificate.badgeUrl && (
                        <img
                          src={certificate.badgeUrl}
                          alt="certificate badge"
                          className="badge__img__small"
                          onClick={() => {
                            window.open(
                              certificate.accomplishmentUrl,
                              "_blank"
                            );
                          }}
                        />
                      )}

                      <div
                        className="certificate__data bd-grid"
                        onClick={() => {
                          window.open(certificate.url, "_blank");
                        }}
                      >
                        <h3 className="certificate__title">
                          {certificate.name}
                        </h3>
                        <span className="education__studies">
                          {certificate.date} | {certificate.organization}
                        </span>
                        <p className="certificate__description">
                          {certificate.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* ========== REFERENCES TBD ========== */}
            {/* <section className="references section" id="references">
              <h2 className="section-title">References</h2>
              <div className="references__container bd-grid">
                <div className="references__content bd-grid">
                  <span className="references__subtitle">UI/UX Designer</span>
                  <h3 className="references__title">Mr. Clay Doe</h3>
                  <ul className="references__contact">
                    <li>Phone: 999-777-666</li>
                    <li>Email: user@email.com</li>
                  </ul>
                </div>
                <div className="references__content bd-grid">
                  <span className="references__subtitle">UI/UX Designer</span>
                  <h3 className="references__title">Mr. Clay Doe</h3>
                  <ul className="references__contact">
                    <li>Phone: 999-777-666</li>
                    <li>Email: user@email.com</li>
                  </ul>
                </div>
              </div>
            </section> */}
            {/* ========== LANGUAGES ========== */}
            <section className="languages section">
              <h2 className="section-title">{t("languages")}</h2>

              <div className="languages__container">
                <ul className="languages__content bd-grid">
                  {t("languages", { ns: "cvcontent", returnObjects: true }).map(
                    (language, idx, arr) => (
                      <li className="language__name" key={idx}>
                        <span className="languages__circle"></span> {language}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </section>
            {/* ========== INTERESTS ========== */}
            <section className="interests section">
              <h2 className="section-title">{t("interests")}</h2>

              <div className="interests__container bd-grid">
                {t("interests", { ns: "cvcontent", returnObjects: true }).map(
                  (interest, idx, arr) => (
                    <div className="interests__content" key={idx}>
                      <box-icon
                        name={interest.boxiconName}
                        class="interests__icon"
                      ></box-icon>
                      <span className="interest__name">{interest.name}</span>
                    </div>
                  )
                )}
                {/* <div className="interests__content">
                  <box-icon
                    name="book-reader"
                    class="interests__icon"
                  ></box-icon>
                  <span className="interest__name">Reading</span>
                </div>
                <div className="interests__content">
                  <box-icon name="dumbbell" class="interests__icon"></box-icon>
                  <span className="interest__name">Fitness</span>
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </main>
      <a href="#" className="scrolltop" id="scroll-top">
        <box-icon name="up-arrow-alt" class="scrolltop__icon"></box-icon>
      </a>
      {/* <script src="utils/js/html2pdf.bundle.min.js"></script> */}
      {/* <script src="utils/js/main.js"></script> */}
    </>
  );
};

export default Body;
