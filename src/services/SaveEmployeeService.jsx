import axios from 'axios';
/**
 * Function: savePatientsServiceFactory responsible for making service calls and saving the data.
 */
const saveEmployeeServiceFactory = () => (
    {
        saveEmployees: (employee) => (
            axios.post(`http://localhost:8080/EmployeePortalService/employee/resource/employees`, { employee }, {
                headers: {
                    Accept: 'application/json',
                },
            }).then(response => (
                response.data
            ))
        ),
        
    }
);



export default saveEmployeeServiceFactory