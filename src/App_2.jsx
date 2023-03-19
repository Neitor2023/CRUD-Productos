import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import CarsList from './assets/components/CarsList'
import CarsForm from './assets/components/CarsForm'
import Form from './assets/components/Form'
import Card from './assets/components/Card'

function App() {
  const [movies, setMovies ] = useState([])
  const [selectedMovie, setSelectedMovie ] = useState([])

  // Read

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () =>{
    axios
      .get(`https://movies-crud-2.academlo.tech/movies/
      `)
      .then(resp => setMovies(resp.data))
      .catch(error => console.log(error))
  }

  // Create
  const createMovies = (movies) =>{
    axios.post(`https://movies-crud-2.academlo.tech/movies/
    `,movies)
    .then(() => getMovies())
    .cath(err=>console.error(err))
  }

  //Update
  const updateMovies = (movie) => {
    axios.put(`https://movies-crud-2.academlo.tech/movies/${movie}
    `,movies)
    .then(() => {
      getMovies()
      updateMovies()
    })
    .cath(err=>console.error(err))
  }

  const editMovies = (movieData) => {
    const index=movieData.finIndex(movie => { movie.id == movieData.id

    })
  return (
    <div className="App">
      <Form 
        createMovies={data=>createMovies(data)}/>
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        editMovies
      <Card dataMovies={movies}
      selectedMovie={data=>updateMovies(data)}/>
    </div>
  )
}

export default App
