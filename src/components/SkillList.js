export function SkillList(props) {
  return (
    <div className="skill__list">
      <h3 className="skill__title">{props.t(props.listName)}</h3>
      <ul className="skills__data">
        {props
          .t("skills", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((skill, idx, arr) => {
            return (
              skill.type === props.skillType && (
                <li className="skills__name" key={idx}>
                  <span className="skills__circle"></span>
                  {skill.name}
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
}
