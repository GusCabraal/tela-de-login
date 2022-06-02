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
            onChange={ this.handleChange }
            value={ user }
          ></input>
          <input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            onChange={ this.handleChange }
            value={ password }
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

