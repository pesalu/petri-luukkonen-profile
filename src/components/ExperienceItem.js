export function ExperienceItem(props) {
  return (
    <div
      className="experience__content"
      onClick={() => {
        window.open(props.exp.organizationUrl, "_blank");
      }}
    >
      <div className="experience__time">
        {props.exp.companyLogo && (
          <img
            src={props.exp.companyLogo}
            alt="Employer company logo"
            className="logo__img__small"
          ></img>
        )}
      </div>

      <div className="experience__data bd-grid" id="experience__content">
        <h3 className="experience__title">{props.exp["job-title"]}</h3>
        <span className="experience__company">
          {props.exp.period.startDate} - {props.exp.period.endDate} |{" "}
          {props.exp.employer}
        </span>
        <p className="experience__description">
          {props.exp.descriptions.join(". ")}
        </p>
        <p className="technology__description">
          <b>Tech. stack:</b> {props.exp.technologies.join(", ")}
        </p>
      </div>
    </div>
  );
}
