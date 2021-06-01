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
const InputComic: React.FC = () => {

  const [comics, setComics] = useState<ResponseData[]>([]);
  const [comicSearch, setComic] = useState('');

  useEffect(() => {
    api
      .get('/comics?limit=100')
      .then(response => {
        setComics(response.data.data.results);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <input value={comicSearch} type="text" id="filterComics" placeholder="Digite o nome do quadrinho" onChange={(e) => setComic(e.target.value)} />
      {
        comics.filter((val) => {
          if (comicSearch === "") {
            return val;
          } else if (val.title.toLowerCase().includes(comicSearch.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return <div>
            <p>{val.title}</p>
          </div>
        })
      }
    </div>
  );
}
export default InputComic;