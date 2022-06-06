import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import './MovieCard.css'


export default function MovieList() {
 const reduxmovies=useSelector(state => state.movieReducer.movies);
 const title=useSelector(state => state.movieReducer.searchTitle);
 const rate=useSelector(state => state.movieReducer.searchRate);

  return (
        <div className='cards'>
          {reduxmovies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase().trim())&& movie.rate>=rate)
          .map((movie , i) => ( <MovieCard movie={movie} key={movie.id} /> ))}
        </div>
  )
}
