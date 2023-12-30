import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  // State kullanarak input değerini saklamak için bir state tanımlayalım
  const [inputValue, setInputValue] = useState('');
  const [Kelvin, setKelvinValue] = useState(0);
  const [Fahrenayt, setFahrenaytValue] = useState(0);

  // Input değeri değiştikçe state'i güncelleyen bir fonksiyon
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (event) => 
  {
    event.preventDefault();
    // Formu işleme veya başka bir şey yapma    
    const newFahrenayt = (inputValue *1.8 )+32;   
    setFahrenaytValue(newFahrenayt); ////
    const newKelvin = (inputValue*1) + 273.15;
    setKelvinValue(newKelvin); //// //nValue(Kelvin); //// //nValue(Kelvin); //// //
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tempeture Converter Project by @canerzer
        {/* Input öğesi oluşturma */}
        <input placeholder="Enter Tempeture" type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Convert Now</button>
            
      <p>Kelvin Değeri : {Kelvin}</p>
      <p>Fahrenayt Değeri : {Fahrenayt}</p>

      
    </form>
  );
}

export default App

