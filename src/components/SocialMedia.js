export function SocialMedia(props) {
  let socialMediaAccounts = props.t("contactDetails.socialmedia", {
    ns: "cvcontent",
    returnObjects: true,
  });
  return (
    <section className="social section">
      <h2 className="section-title">{props.t("social")}</h2>
      <div className="social__container bd-grid">
        {socialMediaAccounts.map((account, idx, arr) => (
          <a
            href={account.url}
            target="_blank"
            className="social__link"
            key={idx}
          >
            <box-icon name={account.boxIconName} type="logo"></box-icon>
            {account.description}
          </a>
        ))}
      </div>
    </section>
  );
}
