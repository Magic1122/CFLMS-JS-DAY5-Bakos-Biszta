/*Create a JSON file which contains the following details per employee:

Unique ID
First Name
Last Name
Email address
Job Title
Salary
Fill the JSON file with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team.*/

const employees = [{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},
{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},

{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},

{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},
{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},
{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
},
{
    "ID": "985674",
    "firstName": "Paul",
    "lastName": "Doe",
    "email": "paul@gmail.com",
    "jobT": "developer",
    "salary": "3000"
}

]
const resultDiv = document.getElementById("result")

/* resultDiv.innerHTML += `<table>`
console.log(resultDiv) */

employees.map((employee) => {
    resultDiv.innerHTML += 
    `<table>
    <tr>
    <th>ID</th>
    <th>First Name</th> 
    <th>Last name</th>
    <th>Email</th>
    <th>Job</th>
    <th>Salary</th>
  </tr>
  <tr>
    <td>${employee.ID}</td>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.email}</td>
    <td>${employee.jobT}</td>
    <td>${employee.salary}</td>
  </tr>
  </table>`
  console.log(employee)
})

/* <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
 */

var i = 0
    /* document.writeln("<table border='2'><tr>");
    for (i = 0; i < employees.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>ID</b></td><td width=50>" + "</td></tr>");
        document.writeln("<tr><td><b>First Name</b></td><td width=50>" + "</td></tr>");
        document.writeln("<tr><td><b>Last Name</b></td><td width=50>" + "</td></tr>");
        document.writeln("<tr><td><b>Email</b></td><td width=50>" + "</td></tr>");
        document.writeln("<tr><td><b>Job</b></td><td width=50>" + "</td></tr>");
        document.writeln("<tr><td><b>Salary</b></td><td width=50>" + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    } */
    for (i = 0; i < employees.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>ID</b></td><td width=50>" + employees[i].ID + "</td></tr>");
        document.writeln("<tr><td><b>FirstName</b></td><td width=50>" + employees[i].firstName + "</td></tr>");
        document.writeln("<tr><td><b>LastName</b></td><td width=50>" + employees[i].lastName + "</td></tr>");
        document.writeln("<tr><td><b>Email</b></td><td width=50>" + employees[i].email + "</td></tr>");
        document.writeln("<tr><td><b>Job</b></td><td width=50>" + employees[i].jobT + "</td></tr>");
        document.writeln("<tr><td><b>Salary</b></td><td width=50>" + employees[i].salary + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }
    document.writeln("</tr></table>");