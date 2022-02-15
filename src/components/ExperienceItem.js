export function ExperienceItem(props) {
  return (
    <div className="experience__content">
      <div className="experience__time">
        {props.exp.companyLogo && (
          <img
            src={props.exp.companyLogo}
            alt="Employer company logo"
            className="logo__img__small"
            onClick={() => {
              window.open(props.exp.organizationUrl, "_blank");
            }}
          ></img>
        )}

        {/* <span className="experience__rounder"></span> */}
        {/* {idx < arr.length - 1 && (
           <span className="experience__line"></span>
          )} */}
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
