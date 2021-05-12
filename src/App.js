import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonInputs from './components/PersonInputs/PersonInputs';
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import Login from './components/Login/Login';

const App = () => {
<<<<<<< HEAD
  const [name, setName] = useState('');
  const [surname, setsurName] = useState('');
  const [age, setAge] = useState('');
  const [search, setSearch] = useState('');
  const [myArray, setupdateMyArray] = useState(JSON.parse(localStorage.getItem('mytime')) || []);
  const [filteredPerson, setFilteredPerson] = useState([]);
  
  const onClick = () => {
    
    let myData = {
      name: name,
      surname: surname,
      age: age,
    };
    
    setupdateMyArray([...myArray, myData])
    setsurName('');
    setName('')
    setAge('')
  };
 
  const removeItem = (id) => {setupdateMyArray(myArray.filter((person) => myArray.indexOf(person) !== id))}
  
  useEffect(() => {
    if (myArray.length === 0){
      localStorage.clear()
    }else{
      localStorage.setItem("mytime", JSON.stringify(myArray))
    }
    
    setFilteredPerson(
      myArray.filter((person) =>
      person.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      person.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      person.age.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      );
  },[search, name, surname, age, myArray]);
  
  return [
  <div>
    <div className='App' >
      <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Name' />
      <input type='text' onChange={(e) => { setsurName(e.target.value) }} value={surname} placeholder='Surname' />
      <input type='number' onChange={(e) => { setAge(e.target.value) }} value={age} placeholder='Age' />
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
            </tr>
          </thead>
        </table>
        {filteredPerson.map((persons, index) => (
        <Person key={index} {...persons} index={index} delete={removeItem} />))}
        </div>
        </div>
        ];
      }
      
      const Person = (props) => {
        const { name, surname, age, } = props;
        return (
        <div>
          <table key={props.index} className='tabel-two table table-striped table-dark' style={{ width: '55%', margin: 'auto', marginTop: '15px' }}>
            <tbody>
              <tr>
                <td>{props.index + 1}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
                <td><button className="btn btn-danger" onClick={() => props.delete(props.index)}>Delete</button></td>
                </tr>
                </tbody>
                </table>
                </div>
                );
              };
              
=======
  const [isAuth,setIsAuth] =useState(false)
  return (
    <div>
      <Router>
        <Switch> 
          <Route path='/user'>{isAuth?<PersonInputs/>:<Redirect to='/'/>}</Route>
          <Route exact path="/" component={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        </Switch>
      </Router>
    </div>
  );
}

>>>>>>> 8cbced1 (second commit)
export default App;
