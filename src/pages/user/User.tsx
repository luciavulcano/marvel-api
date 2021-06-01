import React from 'react';
import { Link } from 'react-router-dom';

const User: React.FC = () => {

  return (
    <section className="user">
      <div className="user__div">
        <img src="https://i.imgur.com/FP3fYPZ.png" alt="Foto do usuário" className="user__img" />
        <h2>Olá, user@user.com.br</h2>
      </div>
      <article className="user__div--column">
        <h2>Acesse:</h2>
        <Link className="user__link" to="/quadrinhos">	&#128218;Quadrinhos</Link>
        <Link className="user__link" to="/personagens">	&#129464; Personagens</Link>
      </article>


    </section>)


}

export default User;