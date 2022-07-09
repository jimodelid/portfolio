export default function PortfolioCard(props) {
  return (
    <div className="p-5 transition ease-in-out duration-1000 hover:scale-110">
      <div className="flex justify-center">
        <img
          className="bg-white rounded-full max-w-full max-h-48"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="mt-5">
        <div className="text-xl font-semibold">{props.title}</div>
        <div>{props.text}</div>
      </div>
      {props.platform == "app" && (
        <div className="grid grid-cols-2 gap-5 p-5 font-semibold portfolio-card-link">
          <a target="blank" href={props.appstore}>
            App Store
          </a>
          <a target="blank" href={props.playstore}>
            Play Store
          </a>
        </div>
      )}
      {props.platform == "web" && (
        <div className="p-5 font-semibold portfolio-card-link">
          <a target="blank" href={props.weblink}>
            Gå till hemsida
          </a>
        </div>
      )}
    </div>
  );
}
