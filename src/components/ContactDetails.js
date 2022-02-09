export function ContactDetails({ city, county, country, email, phone }) {
  return (
    <div className="home__address bd-grid">
      <span className="home__information">
        <box-icon name="map" class="home__icon"></box-icon>
        {city}, {county}
      </span>
      <span className="home__information">
        <box-icon name="envelope" class="home__icon"></box-icon>
        {email}
      </span>
      <span className="home__information">
        <box-icon name="phone" class="home__icon"></box-icon>
        {phone}
      </span>
    </div>
  );
}
