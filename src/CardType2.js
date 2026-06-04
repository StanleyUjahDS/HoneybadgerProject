import "./styles/cards.css";

export default function CardTwo({ SmallHeader, Bigheader, text }) {
  return (
    <div className="CardTwo Milestone">
      <h3>{SmallHeader}</h3>
      <h2>{Bigheader}</h2>
      <p>{text}</p>
    </div>
  );
}
