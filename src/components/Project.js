export function Project(props) {
  return (
    <div className="certificate__content">
      {props.project.projectLogo && (
        <img
          src={props.project.projectLogo}
          alt="certificate badge"
          className="badge__img__small"
          onClick={() => {
            window.open(props.project.url, "_blank");
          }}
        />
      )}

      <div
        className="certificate__data bd-grid"
        onClick={() => {
          window.open(props.project.url, "_blank");
        }}
      >
        <h3 className="certificate__title">{props.project.name}</h3>
        <p className="certificate__description">{props.project.description}</p>
      </div>
    </div>
  );
}
