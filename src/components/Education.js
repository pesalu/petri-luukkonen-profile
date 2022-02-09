import { Degree } from "./Degree";

export function Education(props) {
  return (
    <section className="education section" id="education">
      <h2 className="section-title">{props.t("education")}</h2>

      <div className="education__container bd-grid">
        {props
          .t("education", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((degree, idx, arr) => {
            return <Degree key={idx} degree={degree}></Degree>;
          })}
      </div>
    </section>
  );
}
