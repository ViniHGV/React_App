import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './index.css'
import Card from '../../components/card';

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder='Digite seu Nome:'
        onChange={e => setStudentName(e.target.value)}
      />
      <button>Adicionar contato</button>

      {
        students.map(student => <Card
          name={student.name}
          time={student.time}
        />)

      }

    </div>
  )
}

export default Home;
