import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './components/models/Pizza';
import './App.css';




const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);




  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Наша піцерія</span>
        <AddPizzaForm/>
      </div>
      
    </div>
  );
}

export default App;
