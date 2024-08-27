import React, { useState } from "react";
import LivroList from "./components/LivroList";
import LivroForm from "./components/LivroForm";

const App = () => {
  const [livroAtual, setLivroAtual] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const handleEdit = (livro) => {
    setLivroAtual(livro);
    setFormVisible(true);
  };

  const handleSave = () => {
    setFormVisible(false);
    setLivroAtual(null);
  };

  const handleCancel = () => {
    setFormVisible(false);
    setLivroAtual(null);
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Livros</h1>
      <LivroList onEdit={handleEdit} />
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
