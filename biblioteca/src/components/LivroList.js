// src/components/LivroList.js
import React, { useEffect, useState } from "react";
import { getLivros, deleteLivro } from "../api";

const LivroList = ({ onEdit }) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await getLivros();
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteLivro(id);
      setLivros(livros.filter((livro) => livro._id !== id));
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.length === 0 ? (
          <li>Não há livros para mostrar.</li>
        ) : (
          livros.map((livro) => (
            <li key={livro._id}>
              {livro.titulo} - {livro.autor}
              <button onClick={() => onEdit(livro)}>Editar</button>
              <button onClick={() => handleDelete(livro._id)}>Deletar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LivroList;
