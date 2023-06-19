const core = require('@actions/core');

try {
  const inputData = JSON.parse(core.getInput('data'));
  const studentName = inputData.StudentName;
  const rollNo = inputData.RollNo;
  const idList = inputData.IdList;

  console.log('Student Name:', studentName);
  console.log('Roll No:', rollNo);
  console.log('ID List:', idList);

  // Use the extracted values to perform your desired actions
  // ...
} catch (error) {
  core.setFailed(error.message);
}
