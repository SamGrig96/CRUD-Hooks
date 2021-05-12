import React, { useState, useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from '../Person/Person'

const PersonInputs = () => {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [age, setAge] = useState('');
  const [search, setSearch] = useState('');
  const [editable,SetEditable] = useState(false)
  const [myArray, setUpdateMyArray] = useState(JSON.parse(localStorage.getItem('mytime')) || []);
  const [filteredPerson, setFilteredPerson] = useState([]);

  const onClick = () => {

    let myData = {
      name: name,
      surname: surname,
      age: age,
    };
  

    setUpdateMyArray([...myArray, myData])
    setSurName('');
    setName('')
    setAge('')
  };

  const removeItem = (id) => {
    let confirmation = window.confirm('You want to delete')
    if (confirmation) {
      setUpdateMyArray(myArray.filter((person) => myArray.indexOf(person) !== id))
    }
    else {
      alert("You canceled the deletion")
    }
  }

   const updateItem = () =>{
     SetEditable(!editable)
     console.log(editable)
   }
   
   useEffect(() => {
    if (myArray.length === 0) {
      localStorage.clear()
    } else {
      localStorage.setItem("mytime", JSON.stringify(myArray))
    }

    setFilteredPerson(
      myArray.filter((person) =>
        person.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        person.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        person.age.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    );
  }, [search, name, surname, age, myArray]);

  return (
    <div>
      <div className='App' >
        <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Name' />
        <input type='text' onChange={(e) => { setSurName(e.target.value) }} value={surname} placeholder='Surname' />
        <input type='number' onChange={(e) => { setAge(e.target.value) }} value={age} placeholder='Age' min='0' />
        <input type="button" className='btn-success' onClick={onClick} value="Add" disabled={name.length === 0 && surname.length === 0 && age.length === 0} />
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
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
        </table>
        {filteredPerson.map((persons, index) => (
          <Person key={index} {...persons} index={index} delete={removeItem}  updateItem={updateItem} />))}
      </div>
    </div>
  );
}



export default PersonInputs;
