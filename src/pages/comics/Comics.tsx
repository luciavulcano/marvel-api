import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';

interface ResponseData {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

const Comics: React.FC = () => {
  const [comics, setComics] = useState<ResponseData[]>([]);
  const [comicSearch, setComic] = useState('');

  useEffect(() => {
    api
      .get('/comics?limit=100')
      .then(response => {
        setComics(response.data.data.results);

      })
      .catch(err => console.log(err))
  }, [])


  return <section className="comics">
    <h2 className="comics__h2">Comics</h2>
    <div className="comics__div--input">
      <input className="comics__input" value={comicSearch} type="text" id="filterComics" placeholder="Digite o nome do quadrinho" onChange={(e) => setComic(e.target.value)} />
    </div>

    <div className="comics__div">
      {
        comics.filter((val) => {
          if (comicSearch === "") {
            return val;
          } else if (val.title.toLowerCase().includes(comicSearch.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          const notFound = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`;
          if (val.thumbnail.path === notFound) {
            return <div className="no"></div>
          } else {
            return (

              <article className="comics__article">

                <img src={`${val.thumbnail.path}.${val.thumbnail.extension}`} alt={`Capa do quadrinho ${val.title}`} className="comics__img" />
                <h3>{val.title}</h3>
              </article>

            )
          }
        })
      }
    </div>

  </section >
}

export default Comics;