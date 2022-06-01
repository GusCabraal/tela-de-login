import './App.css';

function App() {
  return (
    <main className="main-container">
      <section className="login-container">
        <h3>Faça seu login</h3>
        <input type="text" placeholder="Digite seu usuário" ></input>
        <input type="password" placeholder="Digite sua senha" ></input>
        <button type="button" >CONTINUAR</button>
        <span>Esqueci minha senha</span>
        <span>Ainda não sou cliente</span>
      </section>
    </main>
  );
}

export default App;
