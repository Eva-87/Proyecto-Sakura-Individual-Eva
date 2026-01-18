import { useState, useEffect } from "react";
import { getRecords, saveRecord } from "../../services/recordsApi";


import Form from "../../components/form/Form";

import { useTarot } from "../../context/TarotContext";

export default function Record() {
  const [records, setRecords] = useState([]);
  const [FormState, setFormState] = useState({ nombre: "", fecha: "" });

  const { selectedCards } = useTarot();

  useEffect(() => {
    getRecords().then(data => setRecords(data));
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...FormState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      nombre: FormState.nombre,
      fecha: FormState.fecha,
      cartas: selectedCards
    };

    saveRecord(newRecord).then((saved) => {
      setRecords([...records, saved]);
      setFormState({ nombre: "", fecha: "" });
    });
  };

  const handleDelete = (id) => {
    deleteRecord(id).then(() => {
      setRecords(records.filter((r) => r.id !== id));
    });
  };

  return (
    <div className="record-page">
      <h1>Historial de Lecturas Favoritas</h1>

      <Form
        FormState={FormState}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <RecordList records={records} onDelete={handleDelete} />
    </div>
  );
}