// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const numberOfEmployees = parseInt(prompt("4"));
  
  const employees = [];
  
      
    for (let i = 0; i < numberOfEmployees; i++) {
      const firstName = prompt('Koffi ${i + 1}:');
      const lastName = prompt('Mali ${i + 1}:');
      const salary = parseFloat(prompt('10,000 ${i = 1}:'));
  
  
  employee.push({firstName: Koffi, lastName: Mali, salary: 10000});
  
    }
    for (let i = 1; i < numberOfEmployees; i++) {
      const firstName = prompt('Mike ${i+2}:');
      const lastName = prompt('Michael $i + 2}:');
      const salary = parseFloat(prompt('11000 ${i = 2}:'));

  employee.push({firstName: Mike, lastName: Michael, salary: 11000});
    } 

    for (let i = 2; i < numberOfEmployees; i++) {
      const firstName = prompt('Ami ${i + 3}:');
      const lastname = prompt('Mardi ${i + 3}:');
      const salary = parseFloat(prompt('13000 ${i = 3}:'));

  employee.push({firstName: Ami, lastname: Mardi, salary: 13000});

    }

    for (let i = 4; i < numberOfEmployees; i++) {
      const firstName = prompt('Oli ${i + 4}:');
      const lastname = prompt('Yoli ${i + 4}:');
      const salary = prompt('9500 ${i = 4}:');

  employee.push(firstName: Oli, lastname: Yoli, salary: 9500);
    }
      
  
    return employees;
    
  }
  
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
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
