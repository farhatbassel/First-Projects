import './components/tours.scss'
import Loading from './components/Loading'
import Tours from './components/Tours'
import './components/tours.scss'
import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])
  
  const removeTours = (id) =>{
      const newTours = tours.filter((tour) => tour.id !== id)
      setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchTours()
  }, [])

  if (loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if (tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2> no tours left </h2>
          <button className='btn' onClick={()=>fetchTours()}> Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
       <Tours tours={tours} removeTours={removeTours}/>
    </main>
   
  );
}

export default App;
