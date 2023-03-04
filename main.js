//Global variables
var numberOfStudents = 0;
var students = [];

//Functions
//Add student to students array
var addStudent = function (student) {
  if (typeof student === "object" && !Array.isArray(student)) {
    students.push(student);
  }
  numberOfStudents = students.length;
};

//How many students are there in the array
var getNumberOfStudents = function () {
  return students.length;
};

//Reset the students array
var clearStudents = function () {
  students = [];
};

//Creates full name from first name and last name
var createFullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};

//Looks for students with the given initials
var getStudentsByInitials = function (firstInitial, lastInitial) {
  var studentsWithInitial = [];
  for (var i = 0; i < students.length; i++) {
    if (isFullName(students[i])) {
      var student = students[i].split(" ");
      if (student[0][0] == firstInitial && student[1][0] == lastInitial) {
        studentsWithInitial.push(student.join(" "));
      }
    }
  }
  return studentsWithInitial;
};

//Checks whether a given name is a full name or not
var isFullName = function (name) {
  if (name.split(" ").length > 1) {
    return true;
  }
  return false;
};

//Student constructor
var createStudent = function (firstName, lastName, email, age, education) {
  return {
    firstName,
    lastName,
    email,
    age,
    education,
  };
};

//Adds skill to student if it doesn't exists
var addSkills = function (student, skills) {
  if (student.skills === undefined) {
    student.skills = skills;
  } else {
    for (var i = 0; i < skills.length; i++) {
      var bool = true;
      for (var j = 0; j < student.skills.length; j++) {
        if (skills[i] === student.skills[j]) {
          bool = false;
        }
      }
      if (bool) {
        student.skills.push(skills[i]);
      }
    }
  }
};

//Remove student from all students by name
var removeStudent = function (firstName) {
  students = students.filter(function (student) {
    return student.firstName !== firstName;
  });
  numberOfStudents = students.length;
};

var isStudentOlderThan = function (student, age) {
  if (student.age > age) {
    return true;
  }
  return false;
};

var doesStudentHaveSkills = function (student) {
  if (student.skills !== undefined) {
    return true;
  }
  return false;
};

//Checks if the student is older than 18 and has atleast one skill
var isStudentQualified = function (student) {
  if (isStudentOlderThan(student, 18) && doesStudentHaveSkills(student)) {
    return true;
  }
  return false;
};

//Looks for all students older than a given age
var numberOfStudentsOlderThan = function (age) {
  return students.filter(function (student) {
    return isStudentOlderThan(student, age);
  }).length;
};

//Looks for all students with atleast one skill
var getStudentsWithSkills = function () {
  return students.filter(function (student) {
    return doesStudentHaveSkills(student);
  });
};

//Looks for all students that have a  given skill
var getAllStudentsWithSkill = function (skill) {
  return students.filter(function (student) {
    var bool = false;
    for (var i = 0; i < student.skills.length; i++) {
      if (student.skills[i] === skill) {
        bool = true;
      }
    }
    return bool;
  });
};
