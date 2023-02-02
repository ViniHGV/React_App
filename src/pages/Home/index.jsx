import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './index.css'
import Card from '../../components/card';

function Home() {
  const [studentName, setStudentName] = useState();


  return (
    <div className='container'>
        <h1>Nome: {studentName}</h1>
        <input 
          type="text" 
          placeholder='Digite seu Nome:'
          onChange={e => setStudentName(e.target.value)}
        />
        <button>Adicionar contato</button>
        <Card 
          name="Vinicius Henrique" 
          time="11:41" 
        />
        <Card 
          name="Nilton Victor" 
          time="12:25" 
        />
      </div>
  )
}

export default Home;
