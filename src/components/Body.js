import React from "react";

import "../styles/css/styles.css";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Home } from "./Home";
import { SocialMedia } from "./SocialMedia";
import { ProfileDescription } from "./ProfileDescription";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Certificates } from "./Certificates";
import { Languages } from "./Language";
import { Interests } from "./Interests";
import { ScrollTopButton } from "./ScrollTopButton";

let Body = () => {
  const { t } = useTranslation("translations", "cvcontent");

  const [viewPortWidth, setViewPortWidth] = React.useState(window.innerWidth);
  const viewPortWidthLimit = 968;
  const isDesktop = window.innerWidth > viewPortWidthLimit;

  React.useEffect(() => {
    let storeViewPortWidthToState = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", storeViewPortWidthToState);
    return () =>
      window.removeEventListener("resize", storeViewPortWidthToState);
  }, []);

  let navBarOptions = [
    { navButtonText: t("home"), navIconName: "home", href: "#home" },
    { navButtonText: t("profile"), navIconName: "user", href: "#profile" },
    { navButtonText: t("education"), navIconName: "book", href: "#education" },
    { navButtonText: t("skills"), navIconName: "receipt", href: "#skills" },
    {
      navButtonText: t("experience"),
      navIconName: "briefcase",
      href: "#experience",
    },
    {
      navButtonText: t("certificates"),
      navIconName: "award",
      href: "#certificates",
    },
  ];

  return (
    <div>
      <Header
        fullName={t("fullName", {
          ns: "cvcontent",
          returnObjects: true,
        })}
        navBarOptions={navBarOptions}
      ></Header>

      <div id="area-cv">
        <main className="l-main bd-container">
          {/* <div id="area-cv"> */}
          <div className="resume">
            {isDesktop ? (
              <>
                <div className="resume__left">
                  <Home t={t}></Home>
                  <SocialMedia t={t}></SocialMedia>
                  <ProfileDescription t={t}></ProfileDescription>
                  <Education t={t}></Education>
                  <Skills t={t}></Skills>
                  <Languages t={t}></Languages>
                  <Interests t={t}></Interests>
                </div>
                <div className="resume__right">
                  <Experience t={t}></Experience>
                  <Certificates t={t}></Certificates>
                  <section className="publication section" id="publications">
                    <h2 className="section-title">{t("publications")}</h2>
                    <div className="publication__container">
                      {t("publications", {
                        ns: "cvcontent",
                        returnObjects: true,
                      }).map((publication) => (
                        <div
                          className="publication__content"
                          onClick={() => {
                            window.open(publication.url, "_blank");
                          }}
                        >
                          <div className="interests__icon">
                            <box-icon name="receipt"></box-icon>
                          </div>

                          <div className="certificate__data">
                            {/* <h3 className="certificate__title">
                            {publication.title}
                          </h3> */}

                            <p className="publication__description">
                              {publication.chicagoCiteString}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <>
                <Home t={t}></Home>
                <SocialMedia t={t}></SocialMedia>
                <ProfileDescription t={t}></ProfileDescription>
                <Experience t={t}></Experience>
                <Certificates t={t}></Certificates>
                <Education t={t}></Education>
                <Skills t={t}></Skills>
                <Languages t={t}></Languages>
                <Interests t={t}></Interests>
              </>
            )}
          </div>
        </main>
      </div>
      <ScrollTopButton></ScrollTopButton>
    </div>
  );
};

export default Body;
