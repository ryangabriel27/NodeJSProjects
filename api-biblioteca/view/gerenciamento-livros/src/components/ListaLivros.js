import React, { useState, useEffect } from "react"; // Importa o React e os hooks useState e useEffect
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação entre páginas
import "../style/table.css";

function ListaLivros() {
  // Define o estado 'livros' e a função 'setLivros' para atualizá-lo. Inicialmente, 'livros' é um array vazio.
  const [livros, setLivros] = useState([]);

  // O hook useEffect é usado para executar código após a renderização do componente. Neste caso, ele busca os livros da API quando o componente é montado.
  useEffect(() => {
    axios
      .get("http://localhost:8000/livros") // Faz uma requisição GET para a API para buscar a lista de livros
      .then((response) => setLivros(response.data)) // Se a requisição for bem-sucedida, atualiza o estado 'livros' com os dados recebidos
      .catch((error) => console.error("Erro ao buscar os livros:", error)); // Lida com qualquer erro que ocorra durante a requisição
  }, []); // O array vazio [] significa que este useEffect será executado apenas uma vez, quando o componente for montado

  // Função para deletar um livro. Recebe o 'id' do livro como parâmetro.
  const deletarLivro = (id) => {
    axios
      .delete(`http://localhost:8000/livros/${id}`) // Faz uma requisição DELETE para a API para remover o livro com o ID especificado
      .then(() => setLivros(livros.filter((livro) => livro._id !== id))) // Atualiza o estado 'livros' removendo o livro deletado da lista
      .catch((error) => console.error("Erro ao deletar o livro:", error)); // Lida com qualquer erro que ocorra durante a requisição
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      {/* Link para a página de adição de um novo livro */}

      <Link to="/novo" className="link-add">
        Adicionar Novo Livro
      </Link>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Genero</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeia o array de livros para gerar uma lista de itens */}
            {livros.map((livro) => (
              <tr key={livro._id}>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.ano}</td>
                <td>{livro.genero}</td>
                <td>
                  {/* Link para a página de edição do livro */}
                  <Link to={`/editar/${livro._id}`}>Editar</Link>
                  {/* Botão para deletar o livro */}
                  <button onClick={() => deletarLivro(livro._id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaLivros; // Exporta o componente ListaLivros para que possa ser usado em outras partes da aplicação
