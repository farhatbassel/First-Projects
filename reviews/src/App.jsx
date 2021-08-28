import Review from './Review'
import data from './data'

function App() {
  return (
    <main>
        <section>
          <div className="title">
          <h1>Our reviews</h1>
          <div className="underline"></div>
          </div>
            <Review/>
        </section>
      </main>
  );
}

export default App;
