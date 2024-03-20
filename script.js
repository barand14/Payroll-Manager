// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const averageSalaryDiv = document.querySelector('#average-salary');
const randomEmployeeDiv = document.q/uerySelector('#random-employee');

// Collect employee data
const collectEmployees = function() {
  const numberOfEmployees = parseInt(prompt("4"));
  
  const employees = ["Koffi", "Mike", "Ami", "Oli"];

  console.log (student.lenght);
  
      
    for (let i = 0; i < numberOfEmployees; i++) {
      const firstName = prompt('Enter first name for employee ${i + 1}:');
      const lastName = prompt('Enter last name for employee ${i + 1}:');
      const salary = parseFloat(prompt('enter salary for employee ${i + 1}:'));

  employees.push({firstName: Koffi, lastName: Mali, salary: 10000,});
  
  employees.push({firstName: Mike, lastName: Michael, salary: 11000});

  employees.push({firstName: Ami, lastname: Mardi, salary: 13000});

  employees.push({firstName: Oli, lastname: Yoli, salary: 9500});

    }
  }
      
    
  
  return employees;
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {

  let totalSalary = 0;
  
  for (let i = 0; i < employeesArray.lenght; i++) {

    totalSalary += employeesArray[i].salary
  }
const averageSalary =totalSalary/employeesArray.length;

averageSalaryDiv.textContent = 'Average Salary: ${averageSalary.tolocaleString("en-US,", { style: "currency", currency: "USD"})}';
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random () * employeesArray.lenght);
  const randomEmployee = employeesArray[randomIndex];
  randomEmployeeDiv.textContent = 'Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}';

  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
