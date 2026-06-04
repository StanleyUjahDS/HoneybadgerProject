import "./styles/cards.css";

export default function CardThree(props) {
  return (
    <div className="CardThree">
      <p>{props.title}</p>
      <hr />
      <h2>{props.text}</h2>
    </div>
  );
}
