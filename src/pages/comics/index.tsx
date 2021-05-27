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
  const [comics, setComics] = useState<ResponseData[]>([])
  useEffect(() => {
    api
      .get('/comics?limit=40')
      .then(response => {
        setComics(response.data.data.results);
        console.log(response.data.data.results);
      })
      .catch(err => console.log(err))
  }, [])


  return <section className="comics">
    <h2 className="comics__h2">Comics</h2>
    <div className="comics__div">
      {comics.map(comic => {
        const notFound = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`;
        if (comic.thumbnail.path === notFound) {
          return <div className="no"></div>
        } else {
          return (
            <article className="comics__article">

              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa do quadrinho ${comic.title}`} className="comics__img" />
              <h3>{comic.title}</h3>
            </article>
          )

        }
      })
      }
    </div>
  </section>
}

export default Comics;