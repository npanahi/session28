import Style from "./style";

export default function Footer() {
  const obj = [
    {
      title: "تماشا‌ با تلویزیون",
      url: "https://google.com",
      icon: "https://www.filimo.com/assets/web/ui/img-rKvdm3JiOdJbpHLfcS45mw/filimo/fa-filimo-dark-logo.svg",
    },
    {
      title: " اپلیکیشن‌ها",
      url: "https://google.com",
    },
    {
      title: " تماس و پشتیبانی",
    },
  ];
  function renderList() {
    return obj.map(({ title, icon, url }) => {
      return (
        <li>
          {icon !== undefined ? (
            <div className="icon">
              <img src={icon} />
            </div>
          ) : (
            ""
          )}
          <div className="title">
            {url !== undefined ? (
              <p>
                <a href={url}>{title}</a>
              </p>
            ) : (
              <p>{title}</p>
            )}
          </div>
        </li>
      );
    });
  }

  return (
    <Style className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="menu">
            <ul className="render-list">{renderList()}</ul>
          </div>
        </div>
      </div>
    </Style>
  );
}
