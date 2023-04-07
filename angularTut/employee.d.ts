/**
 * Get all employee data	
 * https://dummy.restapiexample.com/api/v1/employees
 * use employeeDetail interface
 * METHOD GET
 */

/**
 * Get a single employee data
 * https://dummy.restapiexample.com/api/v1/employee/{id}
 * use employeeDetail interface
 * METHOD GET
 */

/**
 * employee create METHOD
 * url = "https://dummy.restapiexample.com/api/v1/create"
 * use employeePayload for request
 * use employeeResponse for sucess
 * METHOD POST
 */

/**
 * employee update METHOD;
 * 
 * url = "https://dummy.restapiexample.com/api/v1/update/{id}/";
 * 
 * use employeePayload for request and;
 * 
 * use employeeResponse for sucess;
 * 
 * METHOD PUT;
 */

export interface EmployeePayload {
	name: string;
	salary: string;
	age: string;
}

export interface EmployeeResponse {
	name: string;
	salary: string;
	age: string;
	id: number;
}

export interface EmployeeDetail {
	id: string;
	employee_name: string;
	employee_salary: string;
	employee_age: string;
	profile_image: string;
}

/**
 * delete METHOD
 * 	https://dummy.restapiexample.com/api/v1/delete/{id}
 * METHOD DELETE
 */
export interface EmployeeDeleteResponse {
    status: string,
    message: string
}
