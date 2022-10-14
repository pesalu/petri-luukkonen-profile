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
import { Languages } from "./Language";
import { Interests } from "./Interests";
import { ScrollTopButton } from "./ScrollTopButton";
import { Publications } from "./Publications";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";
import { Training } from "./Training";

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
                  <Projects
                    listTitle={t("projects")}
                    projects={t("projects", {
                      ns: "cvcontent",
                      returnObjects: true,
                    })}
                  ></Projects>
                  <Certificates
                    listTitle={t("certificates")}
                    certificates={t("certificates", {
                      ns: "cvcontent",
                      returnObjects: true,
                    })}
                  ></Certificates>
                  <Training
                    listTitle={t("training")}
                    certificates={t("training", {
                      ns: "cvcontent",
                      returnObjects: true,
                    })}
                  ></Training>
                  <Publications
                    listTitle={t("publications")}
                    publications={t("publications", {
                      ns: "cvcontent",
                      returnObjects: true,
                    })}
                  ></Publications>
                </div>
              </>
            ) : (
              <>
                <Home t={t}></Home>
                <SocialMedia t={t}></SocialMedia>
                <ProfileDescription t={t}></ProfileDescription>
                <Experience t={t}></Experience>
                <Projects
                  listTitle={t("projects")}
                  projects={t("projects", {
                    ns: "cvcontent",
                    returnObjects: true,
                  })}
                ></Projects>
                <Certificates
                  listTitle={t("certificates")}
                  certificates={t("certificates", {
                    ns: "cvcontent",
                    returnObjects: true,
                  })}
                ></Certificates>
                <Publications
                  listTitle={t("publications")}
                  publications={t("publications", {
                    ns: "cvcontent",
                    returnObjects: true,
                  })}
                ></Publications>
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
