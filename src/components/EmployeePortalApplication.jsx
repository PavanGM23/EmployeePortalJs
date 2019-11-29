import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import EmployeePortalContainer, { employeeComponentReducers } from './EmployeePortalContainer';
import EmployeeComponentSaga from '../sagas/EmployeeComponentSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...employeeComponentReducers }),
  compose(applyMiddleware(sagaMiddleware)),
);

EmployeeComponentSaga.map(saga => (sagaMiddleware.run(saga)));

class EmployeePortalApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <EmployeePortalContainer />
      </Provider>

    );
  }
}

export default EmployeePortalApplication;
