import React, {FC} from 'react';
import './styles.css';

import SinglePizza from './SinglePizza';
import Pizza from './models/Pizza';


interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
}


const DisplayPizzas : FC<DisplayPizzasProps> = ({pizzasList, updatePizza}) => {



  return (
    <div className='container'>
        {pizzasList.map((pizza) => {
            return <SinglePizza key = {pizza.id} pizza={pizza} updatePizza={updatePizza}/>
        })}
    </div>
  )


};

export default DisplayPizzas;