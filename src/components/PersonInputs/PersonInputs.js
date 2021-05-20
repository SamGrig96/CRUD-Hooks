import React, { useState, useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from '../Person/Person'
import Button from '@material-ui/core/Button'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import {  useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ff7043',
      
    },
  },
})

const PersonInputs = () => {
  const classes = useStyles()
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [age, setAge] = useState('');
  const [search, setSearch] = useState('');
  const [editable, SetEditable] = useState(false)
  const [myArray, setUpdateMyArray] = useState(JSON.parse(localStorage.getItem('mytime')) || []);
  const [filteredPerson, setFilteredPerson] = useState([]);
  const history = useHistory()


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
  const logout = () => {
    history.push('/')
  }

  const removeItem = (id) => {
    let confirmation = window.confirm('You want to delete')
    if (confirmation) {
      setUpdateMyArray(myArray.filter((person) => myArray.indexOf(person) !== id))
    }
    else {
      alert("You canceled the deletion")
    }
  }

  const updateItem = () => {
    SetEditable(!editable)

  }

  useEffect(() => {
    if (myArray.length === 0) {
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
          <tbody>
            {filteredPerson.map((persons, index) => (
              <Person key={index} {...persons} index={index} delete={removeItem} updateItem={updateItem} />))}
          </tbody>
        </table>
      </div>
      <div className={classes.root} style={{marginLeft:'50%'}}>
        <ThemeProvider theme={theme}>
          <Button type="submit" color="secondary" placeholder="LogOut" onClick={logout}>LogOut</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}



export default PersonInputs;
