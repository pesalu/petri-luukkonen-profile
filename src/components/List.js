export function List({ id, title, style, children }) {
  console.log(children);
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
        {children}
      </div>
    </section>
  );
}
