export function NavItem(props) {
  return (
    <li className="nav__item">
      <a href={props.href} className="nav__link active-link">
        <box-icon name={props.navIconName} class="nav__icon"></box-icon>
        {props.navButtonText}
      </a>
    </li>
  );
}
{
  /* <li className="nav__item">
       <a href="#references" className="nav__link">
         <box-icon name="link-external" class="nav__icon"></box-icon>
         {t("references", { ns: "translations" })}
       </a>
      </li> */
}
