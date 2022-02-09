export function ProfileDescription(props) {
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">{props.t("profile")}</h2>
      <p className="profile__description">
        {props.t("profileDescription", {
          ns: "cvcontent",
        })}
      </p>
    </section>
  );
}
