import React from 'react';
import './stylesheet.css';

export default class EmployeeRegisterView extends React.Component {
    constructor(props) {
        super(props);

        this.registerClicked = this.registerClicked.bind(this);
    }

    registerClicked() {

        let gender = 'Male';

        if (document.getElementById('female').checked) {
            gender = 'Female';
        } else if (document.getElementById('other').checked) {
            gender = 'Other';
        }

        let Employee = {
            firstName: document.getElementById('frstName').value,
            lastName: document.getElementById('lstName').value,
            gender: gender,
            dob: document.getElementById('dob').value,
            department: document.getElementById('dptmt').value,

        }

        this.props.registerClickedCallback(Employee);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>

                        <label htmlFor="fname"><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="fname" id='frstName' required />

                        <label htmlFor="lname"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" name="lname" id='lstName' required />

                        <label htmlFor="gender"><b>Gender</b></label> : <br /><br />
                        Male &nbsp;<input type="radio" name="gender" value="male" id='male' checked /> &nbsp;
                        Female &nbsp;<input type="radio" name="gender" value="female" id='female' /> &nbsp;
                        Other &nbsp;<input type="radio" name="gender" value="other" id='other' />  <br />

                        <label htmlFor="dob"><b>Date of Birth</b></label>
                        <input type="date" placeholder="Enter Date of Birth" name="dob" id='dob' required />

                        <label htmlFor="dprtmnt"><b>Department</b></label>
                        <input type="text" placeholder="Enter Department" name="dprtmnt" id='dptmt' required />

                        <button type="submit" className="registerbtn" onClick={this.registerClicked}>Register</button>
                    </div>

                </form>
            </div>
        );
    }
}