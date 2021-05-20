import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Person = (props) => {
    const { name, surname, age, } = props;
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
            <td><button className="btn btn-danger" onClick={() => props.delete(props.index)}>Delete</button></td>
            <td><button className='btn btn-primary' onClick={() => props.updateItem()}>Edit</button></td>
        </tr>
    );
};

export default Person