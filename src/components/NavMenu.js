import { NavItem } from "./NavItem";

export function NavMenu(props) {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        {props.navBarOptions.map((navBarOption, idx, arr) => (
          <NavItem
            navButtonText={navBarOption.navButtonText}
            navIconName={navBarOption.navIconName}
            href={navBarOption.href}
            key={idx}
          ></NavItem>
        ))}
      </ul>
    </div>
  );
}
