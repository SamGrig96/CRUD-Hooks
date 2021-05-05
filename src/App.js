import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [name, setName] = useState('');
  const [surname, setsurName] = useState('');
  const [age, setAge] = useState('');
  const [search, setSearch] = useState('');
  const [myArray, updateMyArray] = useState(JSON.parse(localStorage.getItem('mytime')) || []);
  const [count, setCount] = useState(1);
  const [filteredPerson, setFilteredPerson] = useState([]);


  const onClick = () => {
    setCount(count => count + 1);
    let myData = {
      name: name,
      surname: surname,
      age: age,
      count: count
    };

    updateMyArray([...myArray, myData])
    setsurName('');
    setName('')
    setAge('')

  };



  useEffect(() => {
    localStorage.setItem("mytime", JSON.stringify(myArray))
    setFilteredPerson(
      myArray.filter((person) =>
        person.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        person.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        person.age.toLocaleLowerCase().includes(search.toLocaleLowerCase()))


    );
  }, [search, name, surname, age]);

  return [
    <div>


      <div className='App' >
        <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Name' />
        <input type='text' onChange={(e) => { setsurName(e.target.value) }} value={surname} placeholder='Surname' />
        <input type='number' onChange={(e) => { setAge(e.target.value) }} value={age} placeholder='Age' />
        <input type="button" className='btn-success' onClick={onClick} value="Add" />
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <table className='table-one table table-dark ' style={{ width: '55%', margin: 'auto' }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name </th>
              <th>Surname</th>
              <th>Age</th>
            </tr>
          </thead>
        </table>
        {filteredPerson.map((persons, index) => (
          <Person key={index} {...persons} />))}
      </div>

    </div>

  ];
}


const Person = (props) => {
  const { name, surname, age, count } = props;

  return (
    <div>
      <table className='tabel-two table table-striped table-dark' style={{ width: '55%', margin: 'auto', marginTop: '15px' }}>
        <tbody>
          <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};
export default App;