import React, {FC} from 'react';
import './styles.css';

import SinglePizza from './SinglePizza';
import Pizza from './models/Pizza';


interface DisplayPizzasProps {
    pizzasList: Pizza[];
}


const DisplayPizzas : FC<DisplayPizzasProps> = ({pizzasList}) => {



  return (
    <div className='container'>
        {pizzasList.map((pizza) => {
            return <SinglePizza key = {pizza.id} pizza={pizza}/>
        })}
    </div>
  )


};

export default DisplayPizzas;