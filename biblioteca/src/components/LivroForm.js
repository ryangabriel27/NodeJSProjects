import React, { useState, useEffect } from "react";
import { addLivro, updateLivro } from "../api";

const LivroForm = ({ livroAtual, onSave, onCancel }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  useEffect(() => {
    if (livroAtual) {
      setTitulo(livroAtual.titulo);
      setAutor(livroAtual.autor);
      setAno(livroAtual.ano);
      setGenero(livroAtual.genero);
    }
  }, [livroAtual]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const livro = { titulo, autor, ano, genero };
    try {
      if (livroAtual) {
        await updateLivro(livroAtual._id, livro);
      } else {
        await addLivro(livro);
      }
      onSave();
    } catch (error) {
      console.error("Erro ao salvar livro:", error);
    }
  };

  return (
    <div>
      <h2>{livroAtual ? "Editar Livro" : "Adicionar Livro"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Autor:
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Ano:
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gênero:
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Salvar</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default LivroForm;
