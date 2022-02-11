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
  const { i18n } = useTranslation();

  const [viewPortWidth, setViewPortWidth] = React.useState(window.innerWidth);
  const viewPortWidthLimit = 968;
  const isDesktop = window.innerWidth > viewPortWidthLimit;

  React.useEffect(() => {
    let storeViewPortWidthToState = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", storeViewPortWidthToState);
    return () =>
      window.removeEventListener("resize", storeViewPortWidthToState);
  }, []);

  let changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
    <>
      <Header
        fullName={t("fullName", {
          ns: "cvcontent",
          returnObjects: true,
        })}
        navBarOptions={navBarOptions}
      ></Header>

      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
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
      <ScrollTopButton></ScrollTopButton>
    </>
  );
};

export default Body;
