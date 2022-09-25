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
// import { Certificates } from "./Certificates";
import { Languages } from "./Language";
import { Interests } from "./Interests";
import { ScrollTopButton } from "./ScrollTopButton";
import { Publications } from "./Publications";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";

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
    { navButtonText: t("home"), navIconName: "bxs-home", href: "#home" },
    { navButtonText: t("profile"), navIconName: "bxs-user", href: "#profile" },
    {
      navButtonText: t("education"),
      navIconName: "bx-book",
      href: "#education",
    },
    { navButtonText: t("skills"), navIconName: "bx-receipt", href: "#skills" },
    {
      navButtonText: t("experience"),
      navIconName: "bxs-briefcase",
      href: "#experience",
    },
    {
      navButtonText: t("certificates"),
      navIconName: "bxs-award",
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
                  <Certificates
                    listTitle={t("certificates")}
                    certificates={t("certificates", {
                      ns: "cvcontent",
                      returnObjects: true,
                    })}
                  ></Certificates>
                  <Projects t={t}></Projects>
                  <Publications t={t}></Publications>
                </div>
              </>
            ) : (
              <>
                <Home t={t}></Home>
                <SocialMedia t={t}></SocialMedia>
                <ProfileDescription t={t}></ProfileDescription>
                <Experience t={t}></Experience>
                <Certificates
                  listTitle={t("certificates")}
                  certificates={t("certificates", {
                    ns: "cvcontent",
                    returnObjects: true,
                  })}
                ></Certificates>
                <Projects t={t}></Projects>
                <Publications t={t}></Publications>
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
