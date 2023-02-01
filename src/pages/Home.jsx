import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import '../styles/index.css'

function Home() {
  return (
    <div className='Home'>
      <div class="mb-3">
        <h1>Lista de Presença</h1>
        <br/>
        <input type="text" class="form-control" id="" placeholder='Digite seu Nome:'/>
        <br/>
        <button type="button" class="btn btn-success">Adicionar contato</button>
      </div>
    </div>
  )
}

export default Home;
