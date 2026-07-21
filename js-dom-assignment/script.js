// Task 1: Select and Read a Heading
const mainTitleElement = document.getElementById('mainTitle');
console.log(mainTitleElement);
console.log(mainTitleElement.innerText);

// Task 2: Update Page Title
const pageTitleElement = document.getElementById('pageTitle');
pageTitleElement.innerText = 'JavaScript DOM Assignment';

// Task 3: Update Student Details
const studentNameElement = document.getElementById('studentName');
const studentCourseElement = document.getElementById('studentCourse');
const studentCityElement = document.getElementById('studentCity');
studentNameElement.innerText = 'John Doe';
studentCourseElement.innerText = 'JavaScript';
studentCityElement.innerText = 'New York';

// Task 4: Create and Add a Paragraph
const messageContainer = document.getElementById('messageContainer');
const successParagraph = document.createElement('p');
successParagraph.innerText = 'DOM element created successfully';
messageContainer.appendChild(successParagraph);

// Task 5: Create a Student List Item
const studentList = document.getElementById('studentList');
const firstStudent = document.createElement('li');
firstStudent.innerText = 'Alice Johnson';
studentList.appendChild(firstStudent);

// Task 6: Add Multiple Students
const studentNames = ['Bob Smith', 'Charlie Brown', 'Diana Prince'];
for (let i = 0; i < studentNames.length; i++) {
  const studentItem = document.createElement('li');
  studentItem.innerText = studentNames[i];
  studentList.appendChild(studentItem);
}

// Task 7: Create Course Cards
const courseContainer = document.getElementById('courseContainer');
const courses = [
  { name: 'JavaScript', trainer: 'Sarah Thompson' },
  { name: 'Python', trainer: 'Michael Chen' },
  { name: 'FastAPI', trainer: 'Emily Rodriguez' }
];
for (let i = 0; i < courses.length; i++) {
  const courseSection = document.createElement('div');
  const courseHeading = document.createElement('h3');
  courseHeading.innerText = courses[i].name;
  const trainerParagraph = document.createElement('p');
  trainerParagraph.innerText = courses[i].trainer;
  courseSection.appendChild(courseHeading);
  courseSection.appendChild(trainerParagraph);
  courseContainer.appendChild(courseSection);
}

// Task 8: Update a Created Element
const registrationParagraph = document.createElement('p');
registrationParagraph.innerText = 'Course registration is closed';
document.body.appendChild(registrationParagraph);
registrationParagraph.innerText = 'Course registration is open';

// Task 9: Remove an Existing HTML Element
const oldMessageElement = document.getElementById('oldMessage');
oldMessageElement.remove();

// Task 10: Remove a Dynamically Created Element
const temporaryParagraph = document.createElement('p');
temporaryParagraph.innerText = 'Temporary notification';
document.body.appendChild(temporaryParagraph);
console.log(temporaryParagraph);
temporaryParagraph.remove();

// Task 11: DOM CRUD Practice
const studentContainer = document.getElementById('studentContainer');
// Create
const studentParagraph = document.createElement('p');
studentParagraph.innerText = 'Emma Watson';
studentContainer.appendChild(studentParagraph);
// Read
console.log(studentParagraph.innerText);
// Update
studentParagraph.innerText = 'Emma Stone';
// Delete
studentParagraph.remove();

// Task 12: Product List Challenge
const productList = document.getElementById('productList');
const productNames = ['Laptop', 'Mobile', 'Keyboard', 'Mouse'];
const productElements = [];
for (let i = 0; i < productNames.length; i++) {
  const productItem = document.createElement('li');
  productItem.innerText = productNames[i];
  productList.appendChild(productItem);
  productElements.push(productItem);
}
// Update Keyboard to Mechanical Keyboard
productElements[2].innerText = 'Mechanical Keyboard';
// Remove Mouse
productElements[3].remove();

// Main Challenge: Student Profile Builder
const profileContainer = document.getElementById('profileContainer');
// Create profile elements
const profileName = document.createElement('h2');
profileName.innerText = 'Rahul';
const profileCourse = document.createElement('p');
profileCourse.innerText = 'JavaScript';
const profileAge = document.createElement('p');
profileAge.innerText = '21';
const profileCity = document.createElement('p');
profileCity.innerText = 'Hyderabad';
const profileStatus = document.createElement('p');
profileStatus.innerText = 'Learning';
// Append all elements
profileContainer.appendChild(profileName);
profileContainer.appendChild(profileCourse);
profileContainer.appendChild(profileAge);
profileContainer.appendChild(profileCity);
profileContainer.appendChild(profileStatus);
// Update course and status
profileCourse.innerText = 'Full Stack Development';
profileStatus.innerText = 'Course Completed';
// Remove age element
profileAge.remove();

// Bonus Challenge: Classroom Notice Board
const noticeBoard = document.getElementById('noticeBoard');
// Create heading
const noticeHeading = document.createElement('h2');
noticeHeading.innerText = 'Classroom Notices';
// Create four notice paragraphs
const notice1 = document.createElement('p');
notice1.innerText = 'Assignment 1 submissions are due by Friday.';
const notice2 = document.createElement('p');
notice2.innerText = 'Midterm exam scheduled for next Tuesday.';
const notice3 = document.createElement('p');
notice3.innerText = 'Guest lecture on JavaScript closures this Thursday.';
const notice4 = document.createElement('p');
notice4.innerText = 'Project presentations start next Monday.';
// Update second notice
notice2.innerText = 'Midterm exam postponed to next month.';
// Remove fourth notice
notice4.remove();
// Append all remaining elements
noticeBoard.appendChild(noticeHeading);
noticeBoard.appendChild(notice1);
noticeBoard.appendChild(notice2);
noticeBoard.appendChild(notice3);
