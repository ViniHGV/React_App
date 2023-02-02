import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './index.css'
import Card from '../../components/card';

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder='Digite seu Nome:'
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>
        Adicionar contato
      </button>

      {
        students.map(student => (
        <Card
          key={student.time}
          name={student.name}
          time={student.time}
        />))

      }

    </div>
  )
}

export default Home;
