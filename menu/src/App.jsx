import Categories from './Categories';
import Menu from './Menu';
import data from './data';
import { useState } from 'react';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {

  const [menuItem, setMenuItem] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItem(data)
      return;
    }

    const newItems = data.filter((item) => item.category === category)
    setMenuItem(newItems)
  }
  
  return (
    <main>  
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>       
          <Categories categories={categories} filterItems={filterItems}/>
          <Menu data={menuItem}/>
      </section>
    </main>  
  );
}

export default App;
