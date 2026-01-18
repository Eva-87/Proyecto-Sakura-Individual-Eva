import React from "react";

export default function CardFanReal({ cards, onSelect, disableSelection }) {
  const total = cards.length;

  if (!cards || total === 0) {
    return <p>Cargando cartas...</p>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "700px",
        height: "350px",
        margin: "40px auto",
      }}
    >
      {cards.map((card, index) => {
        const angle = -90 + (index * (180 / (total - 1)));

        return (
          <img
            key={card.id}
            src={card.sakuraCard}
            alt={card.spanishName}
            onClick={() => !disableSelection && onSelect(card)}
            style={{
              width: "120px",
              position: "absolute",
              left: "50%",
              top: "80%",
              transform: `translate(-50%, -100%) rotate(${angle}deg)`,
              transformOrigin: "bottom center",
              cursor: disableSelection ? "default" : "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translate(-50%, -100%) rotate(${angle}deg) scale(1.1)`;
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
            }}
          />
        );
      })}
    </div>
  );
}
