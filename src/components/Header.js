import { NavMenu } from "./NavMenu";

export function Header(props) {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          {props.fullName}{" "}
        </a>

        <NavMenu navBarOptions={props.navBarOptions}></NavMenu>

        <div className="nav__toggle" id="nav-toggle">
          <box-icon name="grid-alt"></box-icon>
        </div>
      </nav>
    </header>
  );
}
