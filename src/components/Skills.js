import { SkillList } from "./SkillList";

export function Skills(props) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{props.t("skills")}</h2>
      <div className="skills__content bd-grid">
        <SkillList t={props.t} skillType={"programming-language"}></SkillList>
        <SkillList t={props.t} skillType={"application-framework"}></SkillList>
        <SkillList t={props.t} skillType={"software-library"}></SkillList>
      </div>
    </section>
  );
}
