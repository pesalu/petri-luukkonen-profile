export function Certificate(props) {
  return (
    <div className="certificate__content">
      {props.certificate.badgeUrl && (
        <img
          src={props.certificate.badgeUrl}
          alt="certificate badge"
          className="badge__img__small"
          onClick={() => {
            window.open(props.certificate.accomplishmentUrl, "_blank");
          }}
        />
      )}

      <div
        className="certificate__data bd-grid"
        onClick={() => {
          window.open(props.certificate.url, "_blank");
        }}
      >
        <h3 className="certificate__title">{props.certificate.name}</h3>
        <span className="education__studies">
          {props.certificate.date} | {props.certificate.organization}
        </span>
        <p className="certificate__description">
          {props.certificate.description}
        </p>
      </div>
    </div>
  );
}
