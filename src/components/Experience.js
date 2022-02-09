import { ExperienceItem } from "./ExperienceItem";

export function Experience(props) {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">{props.t("experience")}</h2>

      <div className="experience__container bd-grid">
        {props
          .t("experience", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((exp, idx, arr) => {
            return <ExperienceItem key={idx} exp={exp}></ExperienceItem>;
          })}
      </div>
    </section>
  );
}
