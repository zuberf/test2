var students;
var randomTime = Math.floor(Math.random() * 3000) + 1;

exports.initialize = function () {
  const fs = require('fs');
  fs.readFile('./students.json', (err, data) => {
    if (err) reject('Failure to read file students.json!');
    students = JSON.parse(data);
  });
  return new Promise(function (resolve, reject) 
  {
   setTimeout(function () {
    console.log('Initialize');
      resolve('Data succesfully initialized!');
    }, randomTime);
  });
};
exports.getAllStudents = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Get All Students');
      resolve(students);
    },randomTime);
  });
};
exports.getBSD = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Get All BSD');
      var temp;
      const manList = [];
      for (program of students) {
        if ((program.program = 'BSD')) {
          temp = program;
          manList.push(temp);
        }
      }
      resolve(manList);
    }, randomTime);
  });
};

exports.getGPA = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Highest GPA');
      var i;
      const manList = [];
      for (GPA of students) {
        if ((GPA <= 4)) {
          i = GPA;
          manList.push(i);
        }
      }
      resolve(manList);
    }, randomTime);
  });
};
