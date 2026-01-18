const CardFront = ({ card }) => {
  return (
    <div
      style={{
        width: "140px",
        minHeight: "200px",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{card.name}</h3>
      <p>{card.meaning || card.description}</p>
    </div>
  );
};

export default CardFront;
