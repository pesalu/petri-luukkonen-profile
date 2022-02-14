import { BoxIcon } from "./BoxIcon";
export function InterestItem(props) {
  return (
    <div className="interests__content">
      <BoxIcon
        name={props.interest.boxiconName}
        class="interests__icon"
      ></BoxIcon>
      <span className="interest__name">{props.interest.name}</span>
    </div>
  );
}
