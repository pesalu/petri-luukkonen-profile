function Language(props) {
  return (
    <li className="language__name">
      <span className="languages__circle"></span> {props.language}
    </li>
  );
}
export function Languages(props) {
  return (
    <section className="languages section">
      <h2 className="section-title">{props.t("languages")}</h2>

      <div className="languages__container">
        <ul className="languages__content bd-grid">
          {props
            .t("languages", {
              ns: "cvcontent",
              returnObjects: true,
            })
            .map((language, idx, arr) => (
              <Language key={idx} language={language}></Language>
            ))}
        </ul>
      </div>
    </section>
  );
}
