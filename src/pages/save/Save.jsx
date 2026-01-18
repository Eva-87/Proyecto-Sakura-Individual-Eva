import { useState, useEffect } from "react";
import { useTarot } from "../../context/TarotContext";
import { saveRecord, getRecords, deleteRecord } from "../../services/recordsApi";
import "./save.css";

const Save = () => {
  const { selectedCards } = useTarot();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords().then((data) => setRecords(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecord = {
      name,
      date,
      cards: Array.isArray(selectedCards) ? selectedCards : [],
    };

    await saveRecord(newRecord);

    const updated = await getRecords();
    setRecords(updated);

    setName("");
    setDate("");

    alert("Lectura guardada correctamente");
  };

  return (
    <div className="save-container">
      <h2 className="save-title">Guardar lectura</h2>

      <form onSubmit={handleSubmit} className="save-form">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit" className="save-btn">
          Guardar lectura
        </button>
      </form>

      <h2 className="history-title">Historial</h2>

      <div className="records-list">
        {records.map((record) => (
          <div key={record.id} className="record-card">
            <h3 className="record-name">{record.name}</h3>
            <p className="record-date">{record.date}</p>

            <ul className="record-cards">
              {(record.cards ?? []).map((card) => (
                <li key={card.id} className="record-card-item">
                  {card.spanishName}
                </li>
              ))}
            </ul>

            <button
              className="delete-btn"
              onClick={async () => {
                await deleteRecord(record.id);
                setRecords(records.filter((r) => r.id !== record.id));
              }}
            >
              Eliminar lectura
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Save;
