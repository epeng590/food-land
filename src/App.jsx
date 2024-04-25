import { useState } from 'react';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState([]);
  console.log('rendering food items', foodItems);

  const searchFoodItems = async () => {
    try {
      const foodName = 'burger';
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodName}&page=1&page_size=10&json=1`
      );
      const data = await response.json();
      setFoodItems(data.products);
      console.log('foodItems', foodItems);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  return (
    <>
      <button onClick={searchFoodItems}>fetch food</button>
      <div className="container">
        <div>
          {foodItems?.map((foodItem, index) => {
            return <h1 key={index}>{foodItem.product_name}</h1>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
