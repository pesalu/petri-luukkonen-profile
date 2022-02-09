export function InterestItem(props) {
  return (
    <div className="interests__content">
      <box-icon
        name={props.interest.boxiconName}
        class="interests__icon"
      ></box-icon>
      <span className="interest__name">{props.interest.name}</span>
    </div>
  );
}
