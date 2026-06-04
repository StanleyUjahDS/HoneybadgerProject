import "./styles/cards.css";

export default function CardFour({ link, title, text }) {
  return (
    <div className="CardFour">
      <img src={link} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
