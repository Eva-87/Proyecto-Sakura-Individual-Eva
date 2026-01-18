import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";

export default function Form({ FormState, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form-container">
      <Input
        name="nombre"
        placeholder="Nombre"
        value={FormState.nombre}
        onChange={onChange}
        className="input-basic"
      />

      <Input
        name="fecha"
        type="date"
        value={FormState.fecha}
        onChange={onChange}
        className="input-basic"
      />

      <Button type="submit" className="btn-primary">
        Guardar
      </Button>
    </form>
  );
}
