import React from 'react';

import InputComic from './Input'



const Home: React.FC = () => {

  return (
    <section className="home">
      <h3>Faça login para acessar seus quadrinhos e personagens preferidos</h3>

      <form className="home__form">
        <label>e-mail</label>
        <input type="email" placeholder="Digite seu e-mail cadastrado" />
        <label>senha</label>
        <input type="text" placeholder="Digite sua senha" />
        <a href="/user/User" className="home__botao">
          Entrar
        </a>
      </form>

      {/* <div className="home__div">
        <form className="home__form">
          <label htmlFor="Procure por personagem">
            Procure por personagem
        </label>
          <input type="text" id="filter-character" placeholder="Digite o nome do personagem" />
        </form>
        <form className="home__form">
          <label htmlFor="Procure por quadrinho">
            Procure por quadrinho
        </label>
          <InputComic />
        </form>

      </div> */}
    </section>
  )


}

export default Home;

