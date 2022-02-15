import { BoxIcon } from "./BoxIcon";

export function NavItem(props) {
  return (
    <li className="nav__item">
      <a href={props.href} className="nav__link active-link">
        <BoxIcon name={props.navIconName} class="nav__icon"></BoxIcon>
        {props.navButtonText}
      </a>
    </li>
  );
}
