import { createContext, useContext, useState } from "react";

const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
  const [allCards, setAllCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <TarotContext.Provider
      value={{
        allCards,
        setAllCards,
        selectedCards,
        setSelectedCards,
      }}
    >
      {children}
    </TarotContext.Provider>
  );
};

export const useTarot = () => useContext(TarotContext);
