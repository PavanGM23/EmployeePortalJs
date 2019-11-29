import * as actionTypes from '../actions/ActionTypes';


const employeeComponentReducer = (state = {
    isEmployeeListView: false,
    isRegisterView: true,
    employeeList: []
    
}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {
        case actionTypes.REGISTER_EMPLOYEE_SUCCESS:
            newState.isEmployeeListView = true;
            newState.isRegisterView = false
            newState.employeeList = action.employeeRegResponse;
            return newState;

        default:
            return state;
    }
};

export default employeeComponentReducer;
