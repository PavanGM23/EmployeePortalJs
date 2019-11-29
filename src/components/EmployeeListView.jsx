import React from 'react';
import EmployeeRegisterView from './EmployeeRegisterView.jsx';

const EmployeeListView = (props) => {

    return (
        // <div>
        //     <center><h1>Employee Register Portal</h1></center>

        //     <div>
        //         Click here to register an employee : <input type='Submit' value='Register' onClick={props.registerClickedCallback}></input>
        //     </div>
        // </div>

        <ReactTable
            data={props.data}
            columns={columns}
        />
    );
}

export default EmployeeListView;


