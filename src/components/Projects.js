import { Project } from "./Project";

export function Projects(props) {
  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">{props.t("projects")}</h2>

      <div className="certificate__container bd-grid">
        {props
          .t("projects", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((project, idx, arr) => {
            return <Project key={idx} project={project}></Project>;
          })}
      </div>
    </section>
  );
}
