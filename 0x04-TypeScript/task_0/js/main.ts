/** Renders table based on a list of objects */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstSudent: Student = {
  firstName: 'Hanna ',
  lastName: 'Rojas',
  age: 8,
  location: 'Bogota',
}

const secondSudent: Student = {
  firstName: 'Ellie',
  lastName: 'Janne',
  age: 4,
  location: 'Medellin',
}

const studentList: Array<Student> = [ firstSudent, secondSudent ];

const table = document.createElement('table');
const mbody = document.createElement('mbody');

/** <tr> table row, <td> data cell */
studentList.forEach((obj) => {
  const newrow = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  newrow.appendChild(cellName);
  newrow.appendChild(cellLocation);
  mbody.appendChild(newrow);
});
table.appendChild(mbody);
document.body.appendChild(table);
