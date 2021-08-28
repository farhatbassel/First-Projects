import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () =>{
    setLoading(true)

    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
      console.log(jobs)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchJobs()  
  }, [])
  
  if(loading){
    return (
      <section>
        <h1 className="loading">loading...</h1>
      </section>
    )
  }

const { company, dates, duties, title } = jobs[value]
return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) =>{
            return (
              <button
              key={item.id}
              onClick={()=>{setValue(index)}}
              className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <div className="job-info">
          <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">
            {dates}
          </p>
          {jobs.map((item, index)=>{
            return (
              <div className="job-desc">
                <div className="job-icon">< FaAngleDoubleRight /></div>
                <p>{item.duties[value]}</p>
              </div>
            )
          })}
          </article>
        </div>
      </div>
      <button className='btn'>more info</button>
    </section>
  )
}

export default App;
