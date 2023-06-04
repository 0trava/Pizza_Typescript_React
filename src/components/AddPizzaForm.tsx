import React, {FC, useState, ChangeEvent, FormEvent } from 'react';
import Pizza from './models/Pizza';
import './styles.css';


interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}


const initState = {
    title: '',
    price: '',
    img: '',
}



const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target;
        setNewPizza({...newPizza, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(e);
        const {title, price, img} = newPizza;
        console.log(newPizza);

        if (title && price && img) {
            addPizza({title, img, price:Number(price), id: Date.now()});
            setNewPizza(initState);
        }
    }

  return (

    <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="title"
         placeholder='Name'
         onChange={handleChange}
         value={newPizza.title} />

        <input
         type="text"
         name="price"
         placeholder='Price'
         onChange={handleChange}
         value={newPizza.price} />

        <input
         type="number"
         name="img"
         placeholder='Images'
         min="1" max="6"
         onChange={handleChange}
         value={newPizza.img} />

        <div>
            <input type="radio" name="img"  id="1"/>
            <label className='label1' htmlFor = "1"></label>
        </div>
        <div>
            <input type="radio" name="img"  id="2"/>
            <label className='label2' htmlFor = "2" ></label>
        </div>
        <div>
            <input type="radio" name="img"  id="3"/>
            <label className='label3' htmlFor = "3"></label>
        </div>
        <div>
            <input type="radio" name="img"  id="4"/>
            <label className='label4' htmlFor = "4"></label>
        </div>
        <div>
            <input type="radio" name="img"  id="5"/>
            <label className='label5' htmlFor = "5"></label>
        </div>
        <div>
            <input type="radio" name="img"  id="6"/>
            <label className='label6' htmlFor = "6"></label>
        </div>

         <button type="submit">+Add to menu</button>

    </form>
  )


}

export default AddPizzaForm;