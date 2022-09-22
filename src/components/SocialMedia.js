// import { ReactComponent as SpotifyIcon } from "../icons/spotify.svg";

import { BoxIcon } from "./BoxIcon";

// let Icon = async ({ iconName }) => {
//   let icon = await import(`../icons/${iconName}.svg`);
//   return <p>{icon}</p>;
// };

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
            rel="noreferrer"
            target="_blank"
            className="social__link"
            key={idx}
          >
            {/* <box-icon name={account.boxIconName} type="logo"></box-icon> */}
            <BoxIcon name={account.boxIconName}></BoxIcon>

            {/* <i className={`bx bx-${str}`}></i> */}
            {/* <Icon iconName={account.boxIconName} /> */}
            {account.description}
          </a>
        ))}
      </div>
    </section>
  );
}
