// Discover.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTarot } from "../../context/TarotContext";
import Navbar from "../../components/navbar/Navbar"; 
import "./discover.css";

const Discover = () => {
  const { selectedCards } = useTarot();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCards.length !== 3) {
      navigate("/");
    }
  }, [selectedCards, navigate]);

  return (
    <div>
      <Navbar />

      <div className="discover-container">
        <div className="container-meaning"><h2 className="title-reading">“Las cartas revelan tus caminos pasados , tus presente y
           futuro… “Aqui esta Tu historia completa… déjame mostrártela.””</h2></div>
        

        <div className="cards-wrapper">
          {selectedCards.map((card) => (
            <div key={card.id} className="card-box">
              <img
                src={card.sakuraCard}
                alt={card.spanishName}
                className="card-image"
              />

              <h3>{card.spanishName}</h3>
              <p className="card-meaning">{card.meaning}</p>
            </div>
          ))}
        </div>

        <div className="buttons-wrapper">
          <button className="btn" onClick={() => navigate("/")}>
            Volver a seleccionar
          </button>

          <button className="btn btn-save" onClick={() => navigate("/save")}>
            Guardar mi lectura
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
