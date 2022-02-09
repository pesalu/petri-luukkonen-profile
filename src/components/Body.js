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

  let changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  let navBarOptions = [
    { navButtonText: t("home"), navIconName: "home", href: "#home" },
    { navButtonText: t("profile"), navIconName: "user", href: "#profile" },
    { navButtonText: t("education"), navIconName: "book", href: "#education" },
    { navButtonText: t("skills"), navIconName: "receipt", href: "#skills" },
    {
      navButtonText: "experience",
      navIconName: "briefcase",
      href: "#experience",
    },
    {
      navButtonText: "certificates",
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
        {/*  All elements within this div, is generated in PDF */}
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Home t={t}></Home>
            <SocialMedia t={t}></SocialMedia>
            <ProfileDescription t={t}></ProfileDescription>
            <Education t={t}></Education>
            <Skills t={t}></Skills>
          </div>

          <div className="resume__right">
            <Experience t={t}></Experience>
            <Certificates t={t}></Certificates>
            <Languages t={t}></Languages>
            <Interests t={t}></Interests>
          </div>
        </div>
      </main>
      <ScrollTopButton></ScrollTopButton>
    </>
  );
};

export default Body;
