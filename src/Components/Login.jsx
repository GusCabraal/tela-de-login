import React from "react";

export default class Login extends React.Component {
    state = {
        user: '',
        password: '',
    }

    handleChange = ({ target : { name, value } }) => {
        this.setState({
            [name]: value,
        })
    }

    checkLogin = () => {
        const { user, password } = this.state;
        if (user === "admin" && password === "admin"){
            alert("Login successful!!!");
        } else {
            alert("Access denied!");
        }
        this.setState({
            user: '',
            password: '',
        })
    }
  render() {
    const { user, password } = this.state;
    return (
      <main className="main-container">
        <section className="login-container">
          <h3>Faça seu login</h3>
          <input
            type="text"
            placeholder="Digite seu usuário"
            name="user"
            value={ user }
            onChange={ this.handleChange }
          ></input>
          <input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          ></input>
          <button
            type="button"
            onClick={ this.checkLogin }
            >
                CONTINUAR
            </button>
          <span>Esqueci minha senha</span>
          <span>Ainda não sou cliente</span>
        </section>
      </main>
    );
  }
}

