import React, {FC, useState} from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import Pizza from './models/Pizza';
import EditPizzaForm from './EditPizzaForm';

import './styles.css';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza:Pizza) => void;
    deletePizza: (id: number) => void;
}


const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleTaggleEdit = () => {
        setEdit(!edit);

    }



  return (
    <div className='pizza'>
        <img src={`./images/pizza-${pizza.img}.jpg`} alt={pizza.title} />
        <h2>{pizza.title}</h2>
        <span>{pizza.price}$</span>

        <div className='pizza-controls'>
            <AiFillEdit onClick={handleTaggleEdit}/>
            <AiFillDelete onClick={ () => deletePizza(pizza.id)}/>
        </div>

        {edit 
        ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleTaggleEdit={handleTaggleEdit}/>
        : null}

    </div>
  )
}

export default SinglePizza;