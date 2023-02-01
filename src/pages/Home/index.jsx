import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './index.css'

function Home() {
  return (
    <div className='container'>
        <h1>Lista de Presença</h1>
        <br/>
        <input type="text" placeholder='Digite seu Nome:'/>
        <br/>
        <button type="button" class="btn btn-success">Adicionar contato</button>
      </div>
  )
}

export default Home;
