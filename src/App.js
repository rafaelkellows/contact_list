import './App.css';

function App() {
  return (
    <div className="App">
      <section className="list-itens">
        <h2>Todos os Contatos</h2>
        <div className="container">
          <h3>A</h3>
          <div>
            <ul className="table-header">
              <li>Nome</li>
              <li>Cargo</li>
              <li>E-mail</li>
              <li>Tel. Celular</li>
              <li>Tel. Contato</li>
              <li>Ações</li>
            </ul>
            <ul>
              <li>Afonso Cardoso</li>
              <li>Gerente de Produção</li>
              <li>afonsocardodo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
              <li><a href="edit.php">Editar</a> | <a href="delete.php">Excluir</a></li>
            </ul>
            <ul>
              <li>Aginaldo Raiz Demétrios</li>
              <li>Desenvolvimento</li>
              <li>aginaldo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
              <li><a href="edit.php">Editar</a> | <a href="delete.php">Excluir</a></li>
            </ul>
            <ul>
              <li>Agenor Souza Cardozo</li>
              <li>Gerente de Produção</li>
              <li>afonsocardodo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
              <li><a href="edit.php">Editar</a> | <a href="delete.php">Excluir</a></li>
            </ul>
            <ul>
              <li>Amanda Paula da Silva</li>
              <li>Gerente de Produção</li>
              <li>afonsocardodo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
              <li><a href="edit.php">Editar</a> | <a href="delete.php">Excluir</a></li>
            </ul>
          </div>

          <h3>C</h3>
          <div>
            <ul className="table-header">
              <li>Nome</li>
              <li>Cargo</li>
              <li>E-mail</li>
              <li>Tel. Celular</li>
              <li>Tel. Contato</li>
            </ul>
            <ul>
              <li>Cecília Nascimento</li>
              <li>Gerente de Produção</li>
              <li>afonsocardodo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
            </ul>
          </div>

          <h3>E</h3>
          <div>
            <ul className="table-header">
              <li>Nome</li>
              <li>Cargo</li>
              <li>E-mail</li>
              <li>Tel. Celular</li>
              <li>Tel. Contato</li>
            </ul>
            <ul>
              <li>Eduardo Di Paula</li>
              <li>Gerente de Produção</li>
              <li>afonsocardodo@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
            </ul>
            <ul>
              <li>Emanuel Nascimento</li>
              <li>Produção</li>
              <li>emanuelnascimento@gmail.com</li>
              <li>+55 11 96325.6325</li>
              <li>+55 11 96325.6325</li>
            </ul>
          </div>
        </div>
      </section>

      <a href="anything/">Adicionar</a>
    </div>
  );
}

export default App;
