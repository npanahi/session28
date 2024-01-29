import Style from "./style";
export default function Header() {
  return (
    <Style className="Header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src="https://www.filimo.com/assets/web/ui/img-rKvdm3JiOdJbpHLfcS45mw/filimo/fa-filimo-dark-logo.svg" />
          </div>
          <div className="menu">
            <ul>
              <li>فیلیموتور</li>
              <li>فیلم </li>
              <li>سریال </li>
              <li>ایرانی</li>
            </ul>
          </div>
        </div>
      </div>
    </Style>
  );
}
