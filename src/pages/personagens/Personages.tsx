import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

const Personagens: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const [charSearch, setChar] = useState('');

  useEffect(() => {
    api
      .get('/characters?limit=100')
      .then(response => {
        setCharacters(response.data.data.results);

      })
      .catch(err => console.log(err))
  }, [])


  return <section className="character">
    <h2 className="character__h2">Characters</h2>
    <div className="comics__div--input">
      <input value={charSearch} type="text" id="filterCharacter" placeholder="Digite o nome do quadrinho" onChange={(e) => setChar(e.target.value)} />
    </div>
    <div className="character__div">
      {
        characters.filter((val) => {
          if (charSearch === "") {
            return val;
          } else if (val.name.toLowerCase().includes(charSearch.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          const notFound = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`;
          if (val.thumbnail.path === notFound) {
            return <div className="no"></div>
          } else {
            return (

              <article className="character__article">
                <img src={`${val.thumbnail.path}.${val.thumbnail.extension}`} alt={`Capa do quadrinho ${val.name}`} className="character__img" />
                <h3>{val.name}</h3>
                <p className="character__p">{val.description}</p>
              </article>

            )
          }
        })
      }
    </div>
  </section>
}

export default Personagens;