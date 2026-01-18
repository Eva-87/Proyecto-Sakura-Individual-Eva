import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTarot } from "../../context/TarotContext";
import { getAllCards } from "../../services/cardApi";
import CardFanReal from "../../components/cards/CardFanReal";
import Navbar from "../../components/navbar/Navbar"; 
import Button from "../../components/Button/Button";

import "./Home.css";

const Home = () => {
  const { allCards, setAllCards, selectedCards, setSelectedCards } = useTarot();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCards = async () => {
      if (allCards.length === 0) {
        const data = await getAllCards();
        setAllCards(data);
      }
    };
    loadCards();
  }, []);

  const handleSelectCard = (card) => {
    if (selectedCards.length >= 3) return;
    if (selectedCards.some((s) => s.id === card.id)) return;
    setSelectedCards([...selectedCards, card]);
  };

  return (
    <div className="home-container">

      <Navbar />

      <div className="tarot-banner">
        <h2>Bienvenidos A Sakura Tarot</h2>
        <p>
          Desbloquea los misterios de tu pasado, presente y futuro con nuestras
          lecturas de tarot online interactivo.
        </p>
      </div>

      <h2 className="title-select">Selecciona tus 3 cartas</h2>

      <CardFanReal
        cards={allCards}
        onSelect={handleSelectCard}
        disableSelection={selectedCards.length >= 3}
      />

    
 
      <div className="spots-container">
        <div className="spot">
          <p className="choose-card">elige tu carta</p>
          {selectedCards[0] && (
            <img
              src={selectedCards[0].sakuraCard}
              alt={selectedCards[0].spanishName}
            />
          )}
        </div>

        <div className="spot">
          <p className="choose-card">elige tu carta</p>
          {selectedCards[1] && (
            <img
              src={selectedCards[1].sakuraCard}
              alt={selectedCards[1].spanishName}
            />
          )}
        </div>

        <div className="spot">
          <p className="choose-card">elige tu carta</p>
          {selectedCards[2] && (
            <img
              src={selectedCards[2].sakuraCard}
              alt={selectedCards[2].spanishName}
            />
          )}
        </div>
      </div>

      <p className="selected-count">
        Cartas seleccionadas: {selectedCards.length} / 3
      </p>

      <Button
        disabled={selectedCards.length !== 3}
        onClick={() => navigate("/discover")}
        className="btn-discover"
      >
        Ver lectura
      </Button>

    </div>
  );
};

export default Home;
