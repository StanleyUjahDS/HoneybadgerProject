import "./styles/cards.css";

export default function CardOne({ link, title, text }) {
  return (
    <div className="CardOne">
      <img src={link} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
