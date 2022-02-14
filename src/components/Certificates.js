import { Certificate } from "./Certificate";

export function Certificates(props) {
  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">{props.t("certificates")}</h2>

      <div className="certificate__container bd-grid">
        {props
          .t("certificates", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((certificate, idx, arr) => {
            return (
              <Certificate key={idx} certificate={certificate}></Certificate>
            );
          })}
      </div>
    </section>
  );
}
