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

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([])
  useEffect(() => {
    api
      .get('/characters')
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(err => console.log(err))
  }, [])


  return <section className="character">
    <h2 className="character__h2">Characters</h2>
    <ul className="character__ul">
      {characters.map(character => {
        return (
          <li className="character__li">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Imagem do super-héroi ${character.name}`} className="character__li__img" />
            <h3 className="character__h3">{character.name}</h3>
            <p className="character__p">{character.description}</p>
          </li>
        )
      })
      }
    </ul>
  </section>
}

export default Characters;