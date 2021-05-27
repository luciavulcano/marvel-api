import { homedir } from 'os';
import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';

const Home: React.FC = () => {

  return (

    <section className="home">
      <h1>Organizador Marvel</h1>

      <div className="home__div">
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
          <input type="text" id="filter-comics" placeholder="Digite o nome do quadrinho" />
        </form>
      </div>
    </section>
  )


}

export default Home;

