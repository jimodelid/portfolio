export default function Card(props) {
  return (
    <div
      className={
        props.background +
        " rounded-xl p-5 transition ease-in-out duration-1000 hover:scale-110"
      }
    >
      <div className="flex justify-center">
        <img
          className="bg-white rounded-xl w-2/3 max-h-32"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="text-white mt-5">
        <div className="text-xl font-semibold">{props.title}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}
