import React, { FC, useState } from 'react';
import './App.css';

import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './components/models/Pizza';
import DisplayPizzas from './components/DisplayPizzas';



const App: FC = () => {

  const initialState2: any = window.localStorage.getItem('pizzas');
  const test = JSON.parse(initialState2);
  let initialState = [];

  if (test) {
    initialState = test;
  } 
  const [pizzasList, setPizzasList] = useState<Pizza[]>(initialState);


  console.log(test);
  console.log(pizzasList);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
    window.localStorage.setItem ('pizzas', JSON.stringify([...pizzasList, newPizza]));
  }

  const updatePizza = (newPizza: Pizza) => {
    const updatePizzaList = pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza));
    setPizzasList(updatePizzaList);
    window.localStorage.setItem ('pizzas', JSON.stringify(updatePizzaList));
  }

  const deletePizza = (id: number) => {
    const newPizzaList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzaList);
    window.localStorage.setItem ('pizzas', JSON.stringify(newPizzaList));
  }


  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>The Best PiZZa place </span>
        <AddPizzaForm addPizza={addPizza}/>
        <DisplayPizzas pizzasList={pizzasList}  updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
      
    </div>
  );
}

export default App;
