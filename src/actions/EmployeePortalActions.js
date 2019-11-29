import * as actionTypes from './ActionTypes';

export function registerClickedAction(employee) {
  return {
    type: actionTypes.REGISTER_EMPLOYEE_REQUEST,
    data: {
        employee,
    },
  };
}