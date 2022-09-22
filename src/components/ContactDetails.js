import { BoxIcon } from "./BoxIcon";

export function ContactDetails({ city, county, country, email, phone }) {
  return (
    <div className="home__address bd-grid">
      <span className="home__information">
        <BoxIcon name="bx-map bx-sm" className="home__icon"></BoxIcon>
        {city}, {county}
      </span>
      <span className="home__information">
        <BoxIcon name="bx-envelope bx-sm" className="home__icon"></BoxIcon>
        {email}
      </span>
      <span className="home__information">
        <BoxIcon name="bx-phone bx-sm" class="home__icon"></BoxIcon>
        {phone}
      </span>
    </div>
  );
}
