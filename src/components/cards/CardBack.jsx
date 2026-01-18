const CardBack = ({ onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      style={{
        width: "100px",
        height: "150px",
        backgroundColor: "#c78",
        borderRadius: "8px",
        cursor: disabled ? "default" : "pointer",
        margin: "5px",
      }}
    ></div>
  );
};

export default CardBack;
