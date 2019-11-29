import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/ActionTypes';
import saveEmployeeServiceFactory from '../services/SaveEmployeeService'; 

function* executeEmployeeData(action) {
  try {
    const employeeRegResponse = yield call(saveEmployeeServiceFactory.saveEmployees, action.data.employee);
    yield put({ type: actionTypes.REGISTER_EMPLOYEE_SUCCESS, employeeRegResponse });
  } catch (e) {
    yield put({ type: actionTypes.REGISTER_EMPLOYEE_FAILURE });
  }
}

function* executeServiceSaga() {
    yield takeLatest(actionTypes.REGISTER_EMPLOYEE_REQUEST, executeEmployeeData);
  }
  
  export { executeEmployeeData };
  export default [executeServiceSaga];
  