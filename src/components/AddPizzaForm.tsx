import React, {FC, useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';

const initState = {
    title: '',
    price: '',
    img: '',
}





const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target;
        setNewPizza({...newPizza, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        console.log('handle change >> ', e.target)
        e.preventDefault();
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
         type="text"
         name="img"
         placeholder='Image'
         onChange={handleChange}
         value={newPizza.img} />

         <button type="submit">+Add to menu</button>
    </form>
  )


}

export default AddPizzaForm;