import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Person = (props) => {
    const { name, surname, age, } = props;
    return (
        <div key={props.index}>
            <table key={props.index} className='tabel-two table table-striped table-dark' style={{ width: '55%', margin: 'auto', marginTop: '15px' }}>
                <tbody>
                    <tr>
                        <td>{props.index + 1}</td>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{age}</td>
                        <td><button className="btn btn-danger" onClick={() => props.delete(props.index)}>Delete</button></td>
                        <td><button className='btn btn-primary' onClick={()=>props.updateItem()}>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Person