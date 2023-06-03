import React, {FC, useState, ChangeEvent, FormEvent } from 'react';
import Pizza from './models/Pizza';
import './styles.css';


interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza:Pizza) => void;
    handleTaggleEdit: () => void;
}




const EditPizzaForm: FC<EditPizzaFormProps> = ({data, updatePizza, handleTaggleEdit}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target;
        setEditPizza({...editPizza, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const {title, price, img} = editPizza;

        if (title && price && img) {
            console.log(editPizza);
            updatePizza(editPizza);
            handleTaggleEdit();
        }
    }

  return (

    <form onSubmit={handleSubmit} className='edit-form'>
        <input
         type="text"
         name="title"
         placeholder='Name'
         onChange={handleChange}
         value={editPizza.title} />

        <input
         type="text"
         name="price"
         placeholder='Price'
         onChange={handleChange}
         value={editPizza.price} />

        <input
         type="number"
         name="img"
         placeholder='Images'
         min="1" max="6"
         onChange={handleChange}
         value={editPizza.img} />

         <button type="submit">Confirm</button>
    </form>
  )


}

export default EditPizzaForm;