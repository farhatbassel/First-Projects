import Accordon from './Accordon';
import data from './data'
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
          <div className="info">
          {data.map((data) =>{
            return <Accordon key={data.id} {...data}/>
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
