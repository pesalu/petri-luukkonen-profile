export function Item({ data, style }) {
  console.log(data);
  return (
    <div className={style.section.className}>
      {data.imgUrl && (
        <img
          src={data.imgUrl}
          alt="certificate badge"
          className="badge__img__small"
          onClick={() => {
            window.open(data.imgLink, "_blank");
          }}
        />
      )}

      <div
        className={style.container.className}
        onClick={() => {
          window.open(data.url, "_blank");
        }}
      >
        <h3 className={style.title.className}>{data.name}</h3>
        {data.data ||
          (data.organization && (
            <span className="education__studies">
              {data.date} | {data.organization}
            </span>
          ))}
        <p className="certificate__description">{data.description}</p>
      </div>
    </div>
  );
}
