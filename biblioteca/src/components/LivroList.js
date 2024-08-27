import React from "react";

const LivroList = ({ livros, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.length === 0 ? (
          <li>Não há livros para mostrar.</li>
        ) : (
          livros.map((livro) => (
            <li key={livro._id}>
              <p>{livro.titulo} - {livro.autor} - {livro.ano}</p>
              <button onClick={() => onEdit(livro)}>Editar</button>
              <button onClick={() => onDelete(livro._id)}>Deletar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LivroList;
