import { NavMenu } from "./NavMenu";
import { BoxIcon } from "./BoxIcon";

export function Header(props) {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          {props.fullName}{" "}
        </a>

        <NavMenu navBarOptions={props.navBarOptions}></NavMenu>

        <div className="nav__toggle" id="nav-toggle">
          <BoxIcon name="bxs-grid"></BoxIcon>
        </div>
      </nav>
    </header>
  );
}
