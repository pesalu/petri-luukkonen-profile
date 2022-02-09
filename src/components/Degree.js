export function Degree({ degree }) {
  return (
    <div className="education__content">
      <div className="education__time">
        {degree.schoolLogoUrl && (
          <img
            src={degree.schoolLogoUrl}
            alt="University of Helsinki logo"
            className="logo__img__small"
          />
        )}
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{degree.degree}</h3>
        <span className="education__studies">
          {degree.major} <br /> {degree.school}
        </span>
        <span className="education__year">
          {degree.period.startDate} - {degree.period.endDate}
        </span>
      </div>
    </div>
  );
}
