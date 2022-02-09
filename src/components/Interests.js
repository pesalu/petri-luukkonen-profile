import { InterestItem } from "./InterestItem";

export function Interests(props) {
  return (
    <section className="interests section">
      <h2 className="section-title">{props.t("interests")}</h2>

      <div className="interests__container bd-grid">
        {props
          .t("interests", {
            ns: "cvcontent",
            returnObjects: true,
          })
          .map((interest, idx, arr) => (
            <InterestItem key={idx} interest={interest}></InterestItem>
          ))}
        {/* <div className="interests__content">
           <box-icon
             name="book-reader"
             class="interests__icon"
           ></box-icon>
           <span className="interest__name">Reading</span>
          </div>
          <div className="interests__content">
           <box-icon name="dumbbell" class="interests__icon"></box-icon>
           <span className="interest__name">Fitness</span>
          </div> */}
      </div>
    </section>
  );
}
