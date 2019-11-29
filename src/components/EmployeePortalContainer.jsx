import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import employeeComponentReducer from '../reducers/EmployeeComponentReducer';
import EmployeePortalHomeView from './EmployeePortalHomeView';
import { registerClickedAction } from '../actions/EmployeePortalActions';

const propTypes = {
    RegisterClicked: PropTypes.func.isRequired,
    registerViewClicked: PropTypes.func.isRequired,
  };

  const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }]

  const columns = [{
    Header: 'FirstName',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'LastName',
    accessor: 'age',
    Cell: props => <span className='number'>{'test'}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]

class EmployeePortalContainer extends React.Component {

    constructor(props) {
        super(props);
        // this.registerClicked = this.registerClicked.bind(this);
        // this.registerViewClicked = this.registerViewClicked.bind(this);
    }

    // registerClicked () {
    //     this.props.registerViewClicked();
    // }

    

    render() {
        const {isEmployeeListView, isRegisterView, registerViewClicked} = this.props;
        return (
            <EmployeePortalHomeView
            isEmployeeListView={isEmployeeListView}
            isRegisterView={isRegisterView}
            registerClickedCallback={registerViewClicked}
            columns={columns}
            data={data}
            />
            // <EmployeeRegisterView
            // registerClickedCallback={registerClicked}
            // />
        );
    }
}

EmployeePortalContainer.propTypes = propTypes;

const mapStateToProps = state => ({
    isEmployeeListView: state.employeeComponentReducerState.isEmployeeListView,
  isRegisterView: state.employeeComponentReducerState.isRegisterView,
  employeeList: state.employeeComponentReducerState.employeeList,
});

const mapDispatchToProps = dispatch => ({
    registerClicked: (employee) => {
    dispatch(registerClickedAction(employee));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(EmployeePortalContainer);

const employeeComponentReducers = Object.assign({}, { employeeComponentReducerState: employeeComponentReducer });

export { employeeComponentReducers };
