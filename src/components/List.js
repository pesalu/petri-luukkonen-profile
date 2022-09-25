import { Item } from "./Item";

export function List({ id, title, items, style }) {
  console.log(style);
  return (
    <section
      id={id}
      className={style.section.className}
      style={style.section.inline}
    >
      <h2 className={style.title.className} style={style.title.inline}>
        {title}
      </h2>

      <div className={style.container.className} style={style.container.inline}>
        {items.map((data, idx, arr) => {
          return <Item key={idx} data={data} style={style.item}></Item>;
        })}
      </div>
    </section>
  );
}
