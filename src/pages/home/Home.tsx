import React from 'react';
import { Link } from 'react-router-dom';




const Home: React.FC = () => {

  return (

    <section className="home">
      <h3>Faça login para acessar seus quadrinhos e personagens preferidos</h3>

      <form className="home__form">
        <label>e-mail</label>
        <input type="email" placeholder="Digite seu e-mail cadastrado" />
        <label>senha</label>
        <input type="text" placeholder="Digite sua senha" />

        <Link to="/user" className="home__botao">
          Entrar
        </Link>


      </form>
    </section>
  )
}

export default Home;

