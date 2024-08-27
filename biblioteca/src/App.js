import React, { useState, useEffect } from "react";
import LivroList from "./components/LivroList";
import LivroForm from "./components/LivroForm";
import { deleteLivro, getLivros } from "./api";

const App = () => {
  const [livros, setLivros] = useState([]);
  const [livroAtual, setLivroAtual] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

   // Função para buscar livros da API e atualizar o estado
   const fetchLivros = async () => {
     try {
       const response = await getLivros();
       setLivros(response.data);
     } catch (error) {
       console.error("Erro ao buscar livros:", error);
     }
   };

   // Buscar livros ao montar o componente
   useEffect(() => {
     fetchLivros();
   }, []);

   const handleEdit = (livro) => {
     setLivroAtual(livro);
     setFormVisible(true);
   };

   const handleSave = async () => {
     setFormVisible(false);
     setLivroAtual(null);
     await fetchLivros(); // Atualizar a lista de livros após salvar
   };

   const handleCancel = () => {
     setFormVisible(false);
     setLivroAtual(null);
   };

   const handleDelete = async (id) => {
     try {
       await deleteLivro(id);
       await fetchLivros(); // Atualizar a lista de livros após deletar
     } catch (error) {
       console.error("Erro ao deletar livro:", error);
     }
   };

  return (
    <div className="App">
      <h1>Gerenciamento de Livros</h1>
      <LivroList livros={livros} onEdit={handleEdit} onDelete={handleDelete} />
      {formVisible && (
        <LivroForm
          livroAtual={livroAtual}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
