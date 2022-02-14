import { SkillList } from "./SkillList";

export function Skills(props) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{props.t("skills")}</h2>
      <div className="skills__content bd-grid">
        <SkillList
          t={props.t}
          listName={"programming-languages"}
          skillType={"programming-language"}
        ></SkillList>
        <SkillList
          t={props.t}
          listName={"application-frameworks"}
          skillType={"application-framework"}
        ></SkillList>
        <SkillList
          t={props.t}
          listName={"software-libraries"}
          skillType={"software-library"}
        ></SkillList>
      </div>
    </section>
  );
}
