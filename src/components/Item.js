import { BoxIcon } from "./BoxIcon";

export function Item({ data, style }) {
  console.log(data);
  return (
    <div className={style.section.className}>
      {data.imgUrl ? (
        <img
          src={data.imgUrl}
          alt="certificate badge"
          className="badge__img__small"
          onClick={() => {
            window.open(data.imgLink, "_blank");
          }}
        />
      ) : (
        <div className="interests__icon">
          <BoxIcon name="bx-receipt"></BoxIcon>
        </div>
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
            <span className={style.metaData.className}>
              {data.date} | {data.organization}
            </span>
          ))}
        <p className={style.description.className}>{data.description}</p>
      </div>
    </div>
  );
}