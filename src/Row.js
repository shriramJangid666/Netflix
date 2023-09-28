import React, { useEffect, useState } from 'react'
import './row.css'
import axios from './axios'

function Row({ title, fetchUrl, isLargeRow = false }) {

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      console.log(response)
      setMovies(response.data.results)
      return response;
    }
    fetchData();
  }, [fetchUrl])
  console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>
    <div className='row__posters'>
      {movies.map(movie => (
        <img src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}alt={movie.title} key={movie.id} className={`row__poster ${isLargeRow && "row_posterLarger"}`}/>
         
      ))}
    </div>
    </div>
  )
}

export default Row