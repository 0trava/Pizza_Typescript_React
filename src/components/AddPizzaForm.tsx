import React, {FC, useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

const initState = {
    title: '',
    price: '',
    img: '',
}





const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        console.log('handle change >> ', e.target)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        console.log('handle change >> ', e.target)
    }

  return (

    <form onSubmit={handleSubmit}>
        <input
         type="title"
         name="text"
         placeholder='Name'
         onChange={handleChange}
         value={newPizza.title} />

        <input
         type="price"
         name="text"
         placeholder='Price'
         onChange={handleChange}
         value={newPizza.price} />

        <input
         type="img"
         name="text"
         placeholder='Image'
         onChange={handleChange}
         value={newPizza.img} />

         <button type="submit">Add to menu</button>
    </form>
  )


}

export default AddPizzaForm;