import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import EmployeeRegisterView from './EmployeeRegisterView';

const EmployeePortalHomeView = (props) => {

    if (props.isRegisterView){
    return (
        <EmployeeRegisterView
        registerClickedCallback={props.registerClicked}
        />
    );
    }else if (props.isEmployeeListView){
        return (
        <ReactTable
            data={props.data}
            columns={props.columns}
        />);
    }
        
}

export default EmployeePortalHomeView;